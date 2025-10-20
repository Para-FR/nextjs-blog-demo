import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET /api/articles - List published articles with pagination
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const [articles, total] = await Promise.all([
      Article.find({ published: true })
        .populate('author', 'username avatar')
        .select('-content') // Exclude full content in list view
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Article.countDocuments({ published: true })
    ]);

    return NextResponse.json({
      success: true,
      data: {
        articles,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create new article (authenticated)
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const body = await request.json();
    const { title, content, excerpt, published = false } = body;

    // Validate required fields
    if (!title || !content || !excerpt) {
      return NextResponse.json(
        { success: false, error: 'Title, content, and excerpt are required' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Check if slug already exists
    const existingArticle = await Article.findOne({ slug });
    if (existingArticle) {
      return NextResponse.json(
        { success: false, error: 'An article with this title already exists' },
        { status: 409 }
      );
    }

    // Create article
    const article = await Article.create({
      title,
      slug,
      content,
      excerpt,
      author: session.user.id,
      published,
      publishedAt: published ? new Date() : undefined
    });

    // Populate author info
    await article.populate('author', 'username avatar');

    return NextResponse.json({
      success: true,
      data: article
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
