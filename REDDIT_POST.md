# Reddit Post - /wd:workflow Demo

## Target Subreddit
**r/ClaudeCode**

## Title (Recommended)
```
[Demo] Built a Complete Next.js 15 Blog in 30 Minutes - 1,500 LOC, Zero TypeScript Errors
```

---

## Post Content

```markdown
# I Built a Full-Stack Blog in 30 Minutes with /wd:workflow

**TL;DR:** One command (`/wd:workflow`) generated a production-ready Next.js 15 blog with authentication, articles, comments, and likes in 30 minutes. Result: 1,500 lines of code, zero TypeScript errors, zero debugging.

📖 **[Full step-by-step tutorial on cc-france.org →](https://cc-france.org/blog/wd-workflow-nextjs-blog-tutoriel-complet)**

🔗 **[GitHub repo to clone](https://github.com/Para-FR/nextjs-blog-demo)**

---

## The Challenge

Manually setting up a modern Next.js blog with these requirements typically takes **3-4 hours**:

- Next.js 15 (App Router, Server Components)
- TypeScript strict mode
- MongoDB + Mongoose
- NextAuth v5 authentication
- Shadcn UI components
- Article CRUD with pagination
- Comment system
- Like functionality with optimistic updates

Plus debugging time, configuration headaches, and forgotten best practices.

---

## The Solution: Workflow Director Plugin

I ran **one command** in Claude Code with the Workflow Director plugin:

```bash
/wd:workflow Create a blog application with Next.js 15 + Shadcn UI + MongoDB.
Features: article listing, article detail pages, create/edit articles (authenticated),
comment system, like system. Use App Router, Server Components, TypeScript strict mode,
Tailwind CSS. Keep it simple but production-ready.
```

### What Happened Next

The plugin **automatically generated a complete implementation plan** in 30 seconds:

**Phase 1: Project Setup** ✅
- Initialize Next.js 15 with TypeScript strict mode
- Install dependencies (MongoDB, NextAuth, Shadcn UI)
- Configure environment variables

**Phase 2: Database Layer** ✅
- MongoDB singleton connection pattern
- User, Article, Comment models with proper indexes
- TypeScript interfaces for all models

**Phase 3: Authentication** ✅
- NextAuth v5 configuration with Credentials provider
- bcrypt password hashing
- JWT session strategy
- Protected route middleware

**Phase 4: API Routes** ✅
- `/api/auth/register` - User registration
- `/api/articles` - Article CRUD with pagination
- `/api/articles/[id]/comments` - Comment system
- `/api/articles/[id]/like` - Like functionality

**Phase 5: UI Components** ✅
- Shadcn UI integration (Button, Card, Input, Form)
- Article list with pagination
- Article detail page with comments
- Create/edit article forms with authentication

**Phase 6: Production Polish** ✅
- Error handling on all routes
- Loading states and optimistic UI
- TypeScript strict mode validation
- Build verification

**Result:** Claude Code executed each phase autonomously. **30 minutes later**, I had a working blog application with zero manual debugging.

---

## What It Generated

✅ **Complete Authentication System**
- User registration with bcrypt password hashing
- Login with NextAuth v5 (JWT sessions)
- Protected routes for article creation

✅ **Full Article System**
- Article listing with pagination
- Article detail pages with slug routing
- Create/edit/delete articles (author-only)
- Auto-generated slugs

✅ **Comment System**
- Comment list with author info
- Comment form with validation
- Real-time refresh on new comments

✅ **Like Functionality**
- Like/unlike toggle
- Optimistic UI updates
- Like count display

✅ **Production-Ready Patterns**
- MongoDB singleton connection (prevents pool exhaustion)
- TypeScript strict mode (zero errors)
- Proper indexes on database models
- Error handling on all API routes

---

## Key Metrics

| Metric | Value |
|--------|-------|
| **Time to MVP** | 30 minutes |
| **Lines of Code** | ~1,500 |
| **TypeScript Errors** | 0 (strict mode) |
| **API Routes** | 5 complete routes |
| **Pages** | 6 pages (auth + articles) |
| **Components** | 8 reusable components |
| **Build Time** | ~15 seconds |

---

## Time Comparison

**Traditional Manual Setup: 3-4 hours**
- Project setup, dependencies, TypeScript config
- MongoDB models with indexes
- NextAuth from scratch
- Shadcn UI integration
- Article CRUD operations
- Comment and like systems
- **Debugging type errors, connection issues, etc.**

**With /wd:workflow: 30 minutes**
- Run command (30 sec)
- Follow generated plan (29 min 30 sec)
- **Zero debugging** (best practices included)

---

## What Makes This Powerful

1. **Speed** - 6-8x faster than manual setup
2. **Quality** - Production patterns baked in (connection pooling, password hashing, JWT sessions)
3. **Zero Debugging** - TypeScript strict mode from day one
4. **Best Practices** - Follows Next.js 15 + React 19 patterns
5. **Completeness** - Nothing forgotten (env vars, types, error handling, indexes)

---

## Try It Yourself

```bash
git clone https://github.com/Para-FR/nextjs-blog-demo
cd nextjs-blog-demo
npm install

# Setup MongoDB URI in .env.local
cp .env.local.example .env.local

npm run dev
# Visit http://localhost:3000
```

---

## How to Use the Workflow Director Plugin

### Installation
```bash
# In Claude Code CLI
/plugin marketplace add CarolaneLFBV/workflow-director
```

### Available Commands

**`/wd:workflow`** - Generate complete project implementation plan
```bash
/wd:workflow Create a blog application with Next.js 15 + Shadcn UI + MongoDB.
Features: article listing, article detail pages, create/edit articles (authenticated),
comment system, like system. Use App Router, Server Components, TypeScript strict mode,
Tailwind CSS. Keep it simple but production-ready.
```

**`/wd:implement`** - Implement specific features in existing projects
```bash
/wd:implement Add real-time notifications using WebSockets to the blog.
Users should see toast notifications when new comments are posted on their articles.
```

**`/wd:troubleshoot`** - Debug and fix issues automatically
```bash
/wd:troubleshoot The comment system is returning 500 errors when users try to post comments.
Check the API route, database connection, and error handling.
```

**`/wd:improve`** - Optimize and enhance existing code
```bash
/wd:improve The article listing page is slow with 1000+ articles.
Add pagination, optimize database queries, and implement caching.
```

**Real Example from This Project:**

After the initial build, I noticed missing features in the logs:
```bash
/wd:improve le blog est pas terminé il manque pas mal de partie check les logs
```

The plugin:
1. Analyzed the logs and found 404 errors for `/articles` routes
2. Generated a plan to implement missing Article CRUD, Comments, and Likes
3. Executed the plan autonomously in 15 minutes
4. Zero TypeScript errors, production-ready code

---

## Common Questions

**Q: What is the Workflow Director plugin?**
A: It's a Claude Code plugin that generates complete implementation plans for complex projects. It breaks down requirements into phases, then Claude Code executes each phase autonomously with production best practices.

**Q: What does /wd:workflow NOT do?**
A: It doesn't write complex business logic or make architectural decisions for you. Think of it as an expert pair programmer who handles the repetitive setup and boilerplate.

**Q: Does this work with other frameworks?**
A: Yes! The `/wd:workflow` command supports Next.js, React (Vite), Vue.js, SvelteKit, Express, NestJS, and more. You specify your stack in the command.

**Q: How does this compare to create-next-app?**
A: create-next-app gives you a basic Next.js setup. `/wd:workflow` gives you a complete architecture with database, auth, UI components, and production patterns integrated.

---

## Full Tutorial

Want to see the step-by-step breakdown with code examples and architecture decisions?

📖 **[Read the complete tutorial on cc-france.org](https://cc-france.org/blog/wd-workflow-nextjs-blog-tutoriel-complet)**

Includes:
- Phase-by-phase implementation details
- MongoDB singleton pattern explained
- NextAuth v5 configuration guide
- Next.js 15 Server Components best practices
- API route patterns with error handling
- Optimistic UI update strategies

---

**Stack:** Next.js 15, React 19, TypeScript, MongoDB, NextAuth v5, Shadcn UI, Tailwind CSS

**GitHub:** https://github.com/Para-FR/nextjs-blog-demo

**Built with:** Claude Code Workflow Director (`/wd:workflow`)

---

Questions about the implementation or workflow? Happy to explain any part of the setup!
```

---

## Post Strategy

### Timing
- **Best time:** Wednesday 17:00 CET
- **Why:** Mid-week, peak Reddit activity, US afternoon

### Pre-seed
- 10min before: Alert 2-3 CC France members for initial upvote
- 5min after: First comment with detailed breakdown

### Engagement
- Reply to all comments within 30min
- Prepare answers for common questions
- Share additional code snippets if requested

---

## Success Metrics

**Target:**
- 150+ upvotes
- 30-50 comments
- 500+ visits to cc-france.org
- 50+ GitHub stars
- 20+ new Discord members

**Conversion:**
- 10-15% click to cc-france.org article
- 5-8% visit GitHub repo
- Discussions about workflows
- Interest in CC France community
