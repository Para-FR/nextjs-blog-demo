'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CommentList from '@/components/articles/CommentList';
import CommentForm from '@/components/articles/CommentForm';
import LikeButton from '@/components/articles/LikeButton';

interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: {
    _id: string;
    username: string;
    avatar?: string;
  };
  likes: string[];
  published: boolean;
  publishedAt: string;
  createdAt: string;
  commentsCount: number;
}

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [session, setSession] = useState<any>(null);
  const [commentRefresh, setCommentRefresh] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError('');

      try {
        // Fetch article by slug - need to get all articles and filter
        const articlesResponse = await fetch('/api/articles?limit=1000');
        const articlesData = await articlesResponse.json();

        if (!articlesResponse.ok) {
          throw new Error('Failed to fetch articles');
        }

        const foundArticle = articlesData.data.articles.find(
          (a: any) => a.slug === slug
        );

        if (!foundArticle) {
          throw new Error('Article not found');
        }

        // Fetch full article with ID
        const articleResponse = await fetch(`/api/articles/${foundArticle._id}`);
        const articleData = await articleResponse.json();

        if (!articleResponse.ok) {
          throw new Error(articleData.error || 'Failed to fetch article');
        }

        setArticle(articleData.data);

        // Check if user is authenticated
        const authResponse = await fetch('/api/auth/session');
        if (authResponse.ok) {
          const sessionData = await authResponse.json();
          setSession(sessionData);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Loading article...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-destructive mb-4">{error || 'Article not found'}</p>
            <Link href="/articles">
              <Button>Back to Articles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isAuthor = session?.user?.id === article.author._id;
  const isLiked = session?.user?.id && article.likes.includes(session.user.id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Article Header */}
      <div className="mb-6">
        <Link href="/articles">
          <Button variant="ghost" size="sm">← Back to Articles</Button>
        </Link>
      </div>

      {/* Article Content */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <CardTitle className="text-4xl mb-4">{article.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By {article.author.username}</span>
                <span>•</span>
                <span>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            {isAuthor && (
              <Link href={`/articles/${slug}/edit`}>
                <Button variant="outline" size="sm">Edit</Button>
              </Link>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none mb-6">
            <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
            <div className="whitespace-pre-wrap">{article.content}</div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t">
            <LikeButton
              articleId={article._id}
              initialLiked={isLiked}
              initialLikesCount={article.likes.length}
              isAuthenticated={!!session?.user}
            />
            <span className="text-sm text-muted-foreground">
              {article.commentsCount} comments
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Comments</h2>

        {session?.user ? (
          <Card>
            <CardContent className="pt-6">
              <CommentForm
                articleId={article._id}
                onCommentAdded={() => setCommentRefresh(prev => prev + 1)}
              />
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-6 text-center">
              <p className="text-muted-foreground mb-4">
                Please log in to leave a comment
              </p>
              <Link href="/login">
                <Button>Log In</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        <CommentList articleId={article._id} refreshTrigger={commentRefresh} />
      </div>
    </div>
  );
}
