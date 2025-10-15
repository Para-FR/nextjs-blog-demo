import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full text-center space-y-8">
        <h1 className="text-6xl font-bold">Next.js Blog Demo</h1>
        <p className="text-xl text-muted-foreground">
          Built with Next.js 15, Shadcn UI, MongoDB, and TypeScript
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/articles"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
          >
            View Articles
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
