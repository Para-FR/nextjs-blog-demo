'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LikeButtonProps {
  articleId: string;
  initialLiked: boolean;
  initialLikesCount: number;
  isAuthenticated: boolean;
}

export default function LikeButton({
  articleId,
  initialLiked,
  initialLikesCount,
  isAuthenticated
}: LikeButtonProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLike() {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    // Optimistic update
    const previousLiked = liked;
    const previousCount = likesCount;

    setLiked(!liked);
    setLikesCount(!liked ? likesCount + 1 : likesCount - 1);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/articles/${articleId}/like`, {
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to toggle like');
      }

      // Update with server response
      setLiked(data.data.liked);
      setLikesCount(data.data.likesCount);
    } catch (err) {
      // Revert optimistic update on error
      setLiked(previousLiked);
      setLikesCount(previousCount);
      console.error('Error toggling like:', err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      variant={liked ? 'default' : 'outline'}
      size="sm"
      onClick={handleLike}
      disabled={isLoading}
      className="gap-2"
    >
      <span>{liked ? '❤️' : '🤍'}</span>
      <span>{likesCount}</span>
    </Button>
  );
}
