import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import Comment from '@/lib/db/models/Comment';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET /api/articles/[id] - Get single article by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await params;

    const article = await Article.findById(id)
      .populate('author', 'username avatar')
      .lean();

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    // Get comments count
    const commentsCount = await Comment.countDocuments({ article: id });

    return NextResponse.json({
      success: true,
      data: {
        ...article,
        commentsCount
      }
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// PUT /api/articles/[id] - Update article (authenticated, author only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const { id } = await params;

    // Find article and check ownership
    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    if (article.author.toString() !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - You can only edit your own articles' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, content, excerpt, published } = body;

    // Update slug if title changed
    let slug = article.slug;
    if (title && title !== article.title) {
      slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Check if new slug already exists (excluding current article)
      const existingArticle = await Article.findOne({
        slug,
        _id: { $ne: id }
      });

      if (existingArticle) {
        return NextResponse.json(
          { success: false, error: 'An article with this title already exists' },
          { status: 409 }
        );
      }
    }

    // Update article
    article.title = title || article.title;
    article.slug = slug;
    article.content = content || article.content;
    article.excerpt = excerpt || article.excerpt;

    // Update published status and publishedAt
    if (published !== undefined) {
      article.published = published;
      if (published && !article.publishedAt) {
        article.publishedAt = new Date();
      }
    }

    await article.save();
    await article.populate('author', 'username avatar');

    return NextResponse.json({
      success: true,
      data: article
    });

  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE /api/articles/[id] - Delete article (authenticated, author only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const { id } = await params;

    // Find article and check ownership
    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    if (article.author.toString() !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - You can only delete your own articles' },
        { status: 403 }
      );
    }

    // Delete article and all associated comments
    await Promise.all([
      Article.findByIdAndDelete(id),
      Comment.deleteMany({ article: id })
    ]);

    return NextResponse.json({
      success: true,
      message: 'Article deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
