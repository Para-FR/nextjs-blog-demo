import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export default async function ArticlesPage() {
  await connectToDatabase();

  const session = await auth();

  // Fetch published articles
  const articles = await Article.find({ published: true })
    .populate('author', 'username avatar')
    .select('-content') // Exclude full content in list view
    .sort({ publishedAt: -1 })
    .limit(20)
    .lean();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Articles</h1>
          <p className="text-muted-foreground">
            Discover the latest articles from our community
          </p>
        </div>
        {session?.user && (
          <Link href="/articles/new">
            <Button>Write Article</Button>
          </Link>
        )}
      </div>

      {articles.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">
              No articles published yet.
            </p>
            {session?.user && (
              <Link href="/articles/new">
                <Button>Be the first to write!</Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {articles.map((article: any) => (
            <Card key={article._id.toString()} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link href={`/articles/${article.slug}`}>
                      <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="mt-2">
                      {article.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span>By {article.author?.username || 'Anonymous'}</span>
                    <span>•</span>
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{article.likes?.length || 0} likes</span>
                    <Link href={`/articles/${article.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read more →
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
