import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// POST /api/articles/[id]/like - Toggle like on an article (authenticated)
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

    // Find article
    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const userId = session.user.id;
    const hasLiked = article.likes.includes(userId as any);

    // Toggle like
    if (hasLiked) {
      // Remove like
      article.likes = article.likes.filter(
        (likeId) => likeId.toString() !== userId
      );
    } else {
      // Add like
      article.likes.push(userId as any);
    }

    await article.save();

    return NextResponse.json({
      success: true,
      data: {
        liked: !hasLiked,
        likesCount: article.likes.length
      }
    });

  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to toggle like' },
      { status: 500 }
    );
  }
}
