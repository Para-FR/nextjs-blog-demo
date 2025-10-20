import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Comment from '@/lib/db/models/Comment';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET /api/articles/[id]/comments - Get all comments for an article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await params;

    // Verify article exists
    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const comments = await Comment.find({ article: id })
      .populate('author', 'username avatar')
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: comments
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST /api/articles/[id]/comments - Create a new comment (authenticated)
export async function POST(
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

    // Verify article exists
    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { content } = body;

    // Validate content
    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Comment content is required' },
        { status: 400 }
      );
    }

    // Create comment
    const comment = await Comment.create({
      content: content.trim(),
      author: session.user.id,
      article: id
    });

    // Populate author info
    await comment.populate('author', 'username avatar');

    return NextResponse.json({
      success: true,
      data: comment
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
