'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  author: {
    _id: string;
  };
}

export default function EditArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    published: false
  });

  useEffect(() => {
    async function fetchArticle() {
      setIsLoading(true);
      setError('');

      try {
        // Check authentication
        const authResponse = await fetch('/api/auth/session');
        if (!authResponse.ok) {
          router.push('/login');
          return;
        }

        const session = await authResponse.json();
        if (!session?.user) {
          router.push('/login');
          return;
        }

        // Fetch articles to find by slug
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

        // Fetch full article
        const articleResponse = await fetch(`/api/articles/${foundArticle._id}`);
        const articleData = await articleResponse.json();

        if (!articleResponse.ok) {
          throw new Error(articleData.error || 'Failed to fetch article');
        }

        const fetchedArticle = articleData.data;

        // Check if user is the author
        if (fetchedArticle.author._id !== session.user.id) {
          router.push(`/articles/${slug}`);
          return;
        }

        setArticle(fetchedArticle);
        setFormData({
          title: fetchedArticle.title,
          excerpt: fetchedArticle.excerpt,
          content: fetchedArticle.content,
          published: fetchedArticle.published
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, [slug, router]);

  async function handleSubmit(e: React.FormEvent, publish?: boolean) {
    e.preventDefault();

    if (!article) return;

    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    if (!formData.excerpt.trim()) {
      setError('Excerpt is required');
      return;
    }

    if (!formData.content.trim()) {
      setError('Content is required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`/api/articles/${article._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          published: publish !== undefined ? publish : formData.published
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update article');
      }

      // Redirect to the updated article
      router.push(`/articles/${data.data.slug}`);
    } catch (err: any) {
      setError(err.message);
      setIsSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!article) return;

    if (!confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    setError('');

    try {
      const response = await fetch(`/api/articles/${article._id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete article');
      }

      // Redirect to articles list
      router.push('/articles');
    } catch (err: any) {
      setError(err.message);
      setIsDeleting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error && !article) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-destructive mb-4">{error}</p>
            <Link href="/articles">
              <Button>Back to Articles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href={`/articles/${slug}`}>
          <Button variant="ghost" size="sm">← Back to Article</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl">Edit Article</CardTitle>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleDelete}
              disabled={isDeleting || isSubmitting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="Enter article title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                disabled={isSubmitting}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                placeholder="Brief summary of your article (shown in listings)"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                disabled={isSubmitting}
                className="mt-2"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Keep it short and engaging (1-2 sentences)
              </p>
            </div>

            <div>
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                placeholder="Write your article content here..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={15}
                disabled={isSubmitting}
                className="mt-2"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={(e) => handleSubmit(e, false)}
                disabled={isSubmitting || isDeleting}
                variant="outline"
              >
                {isSubmitting ? 'Saving...' : 'Save as Draft'}
              </Button>
              <Button
                type="button"
                onClick={(e) => handleSubmit(e, true)}
                disabled={isSubmitting || isDeleting}
              >
                {isSubmitting ? 'Publishing...' : formData.published ? 'Update' : 'Publish'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
