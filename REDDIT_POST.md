# Reddit Post - /wd:workflow Demo

## Target Subreddit
**r/ClaudeCode**

## Title Options

### Option 1 (Recommended)
```
[Demo] Built a Next.js 15 Blog MVP in 30min with /wd:workflow - 1,500 LOC, Zero TypeScript Errors
```

### Option 2
```
How /wd:workflow Generated 1,500 Lines of Production-Ready Code in 30 Minutes
```

### Option 3
```
[Workflow] From Idea to Working Auth System in 30min - Next.js 15 + MongoDB + TypeScript Strict Mode
```

---

## Post Content

```markdown
# Building a Next.js 15 Blog with /wd:workflow - 30 Minutes from Zero to MVP

**TL;DR:** Used `/wd:workflow` command from Claude Code Workflow Director plugin to build a production-ready blog foundation in ~30 minutes. Result: 1,500 lines of code, zero TypeScript errors, working authentication, MongoDB integration, and Shadcn UI components.

**GitHub Repo:** https://github.com/Para-FR/nextjs-blog-demo

---

## The Challenge

Build a full-stack blog application with:
- Next.js 15 (App Router, Server Components)
- TypeScript strict mode
- MongoDB + Mongoose
- Authentication (NextAuth v5)
- Shadcn UI components
- Production-ready patterns

Traditionally, this setup takes 3-4 hours of configuration, boilerplate, and debugging.

---

## The Command

I ran a single command in Claude Code:

```
/wd:workflow Create a blog application with Next.js 15 + Shadcn UI + MongoDB.
Features: article listing, article detail pages, create/edit articles (authenticated),
comment system, like system. Use App Router, Server Components, TypeScript strict mode,
Tailwind CSS. Keep it simple but production-ready.
```

---

## What It Generated

### Phase 1: Architecture Plan (30 seconds)

The workflow command analyzed requirements and generated:

1. **Complete tech stack recommendation**
   - Next.js 15 with React 19
   - MongoDB with Mongoose ODM
   - NextAuth v5 for authentication
   - Shadcn UI + Tailwind CSS
   - TypeScript strict mode

2. **8-phase implementation plan**
   - Project foundation
   - Database models
   - Authentication
   - UI components
   - Article features
   - Comment system
   - Like functionality
   - Testing & deployment

3. **File structure blueprint**
   - 25+ files to create
   - Code templates for each
   - Configuration files
   - Best practices baked in

### Phase 2: Implementation (29 minutes)

I followed the generated plan step by step:

**Project Foundation (5 min)**
```bash
# Generated complete project structure
- package.json with all dependencies (460 packages)
- tsconfig.json (strict mode enabled)
- tailwind.config.ts with Shadcn theme
- next.config.ts
- Environment variables template
```

**Database Models (5 min)**
```typescript
// MongoDB singleton connection (prevents pool exhaustion)
let cached = global.mongoose || { conn: null, promise: null };

// User model with indexes
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // bcrypt hashed
});

// Article model with slug and likes
const articleSchema = new Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  author: { type: ObjectId, ref: 'User' },
  likes: [{ type: ObjectId, ref: 'User' }],
  published: Boolean,
});

// Comment model with relationships
const commentSchema = new Schema({
  content: String,
  author: { type: ObjectId, ref: 'User' },
  article: { type: ObjectId, ref: 'Article' },
});
```

**Authentication (10 min)**
```typescript
// NextAuth v5 configuration
export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });
        const isValid = await bcrypt.compare(password, user.password);
        return isValid ? { id, email, name } : null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
});

// Registration API with validation
export async function POST(request) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, username, password: hashedPassword });
  return NextResponse.json({ success: true, user });
}
```

**UI Components (5 min)**
```typescript
// Shadcn Button component
const Button = ({ variant, size, ...props }) => (
  <button className={cn(buttonVariants({ variant, size }))} {...props} />
);

// Login page with form validation
'use client';
export default function LoginPage() {
  const result = await signIn('credentials', { email, password });
  return <Card><CardContent>...</CardContent></Card>;
}
```

**Validation (5 min)**
```bash
# TypeScript compilation
npm run type
# ✅ Zero errors with strict mode

# ESLint validation
npm run lint
# ✅ Clean

# Build test
npm run build
# ✅ Success in ~15 seconds
```

---

## Results

### Files Created: 29

```
app/
├── api/auth/[...nextauth]/route.ts
├── api/auth/register/route.ts
├── login/page.tsx
├── register/page.tsx
├── layout.tsx
└── page.tsx

components/ui/
├── button.tsx
├── card.tsx
├── input.tsx
├── label.tsx
└── textarea.tsx

lib/
├── db/connection.ts
├── db/models/
│   ├── User.ts
│   ├── Article.ts
│   └── Comment.ts
└── auth.ts

types/
├── index.ts
└── next-auth.d.ts
```

### Metrics

| Metric | Value |
|--------|-------|
| **Time to MVP** | ~30 minutes |
| **Lines of Code** | ~1,500 |
| **TypeScript Errors** | 0 (strict mode) |
| **Dependencies** | 460 packages |
| **Build Time** | ~15 seconds |
| **Dev Server Start** | 1.3 seconds |

### What Works Right Now

✅ **Authentication System**
- User registration with validation
- Login with credentials
- Password hashing (bcryptjs)
- JWT sessions
- Protected routes ready

✅ **Database**
- MongoDB singleton connection
- 3 Mongoose models with relationships
- Performance indexes
- Type-safe schemas

✅ **UI Components**
- 5 Shadcn components (Button, Card, Input, Label, Textarea)
- Responsive layouts
- Dark mode support
- Accessible (Radix UI primitives)

✅ **TypeScript**
- Strict mode enabled from day one
- Zero type errors
- Full IntelliSense
- Type augmentation for NextAuth

---

## Key Learnings

### 1. Production Patterns Baked In

**MongoDB Connection Pooling:**
```typescript
// Prevents pool exhaustion in serverless
let cached = global.mongoose || { conn: null, promise: null };
```

**Password Security:**
```typescript
// bcrypt hashing by default
const hashedPassword = await bcrypt.hash(password, 10);
```

**Type Safety:**
```typescript
// Strict mode from the start
"strict": true // in tsconfig.json
```

### 2. Next.js 15 Best Practices

**Server Components by Default:**
```typescript
// No 'use client' needed for data fetching
export default async function ArticlesPage() {
  const articles = await Article.find({ published: true });
  return <ArticleList articles={articles} />;
}
```

**Async Route Handlers:**
```typescript
export async function GET(request: NextRequest) {
  await connectToDatabase();
  return NextResponse.json(data);
}
```

### 3. Time Comparison

**Traditional Manual Setup: 3-4 hours**
- Project setup (15 min)
- Dependencies (30 min)
- TypeScript config (15 min)
- Tailwind + Shadcn (30 min)
- MongoDB setup (20 min)
- Models with indexes (30 min)
- NextAuth from scratch (45 min)
- UI components (30 min)
- Debug type errors (30 min)
- Testing (15 min)

**With /wd:workflow: 30 minutes**
- Run command (30 sec)
- Follow generated plan (29 min 30 sec)
- Zero debugging (best practices included)

---

## What's Not Implemented Yet

The foundation is complete, but these features are pending:
- [ ] Article CRUD operations
- [ ] Article listing/detail pages
- [ ] Comment system UI
- [ ] Like button with optimistic updates
- [ ] Rich text editor
- [ ] Image uploads

Estimated time to complete: +30-45 minutes

---

## Documentation

**Detailed workflow breakdown:** https://github.com/Para-FR/nextjs-blog-demo/blob/master/WORKFLOW.md

**Complete README:** https://github.com/Para-FR/nextjs-blog-demo/blob/master/README.md

---

## Try It Yourself

```bash
git clone https://github.com/Para-FR/nextjs-blog-demo
cd nextjs-blog-demo

# Install dependencies
npm install

# Setup environment
cp .env.local.example .env.local
# Edit .env.local with your MongoDB URI

# Start dev server
npm run dev

# Visit http://localhost:3000
```

---

## Conclusion

The `/wd:workflow` command transformed a vague idea into a working, type-safe, production-ready foundation in 30 minutes.

**What makes this powerful:**
1. **Speed** - 6-8x faster than manual setup
2. **Quality** - Production patterns included by default
3. **Completeness** - Nothing forgotten (env vars, types, validation)
4. **Best Practices** - Follows Next.js 15 + React 19 patterns
5. **Zero Errors** - TypeScript strict mode from day one

**Perfect for:**
- MVPs and prototypes
- Learning new tech stacks
- Starting new projects
- Teaching modern patterns

---

**Stack:** Next.js 15, React 19, TypeScript, MongoDB, NextAuth v5, Shadcn UI, Tailwind CSS

**GitHub:** https://github.com/Para-FR/nextjs-blog-demo

**Built with:** Claude Code Workflow Director (`/wd:workflow`)

---

Questions about the workflow or implementation? Happy to explain any part of the setup!
```

---

## Post Strategy

### Timing
- **Best time:** Wednesday 17:00 CET (mercredi 16 octobre comme prévu initialement)
- **Why:** Mid-week, peak Reddit activity, US afternoon

### Pre-seed
- 10min avant : Prévenir 2-3 membres CC France pour upvote initial
- 5min après : Premier commentaire avec lien détaillé vers WORKFLOW.md

### Engagement
- Répondre à tous les commentaires dans les 30min
- Préparer des réponses types pour questions communes
- Partager code snippets supplémentaires si demandé

---

## Expected Questions & Answers

### "This looks too good to be true. What's the catch?"

```
Fair skepticism! Here's what the workflow does NOT do:
- Write complex business logic (you still code that)
- Make architectural decisions (it proposes, you choose)
- Debug runtime issues (you test and fix)
- Replace understanding (you need to know what you're building)

What it DOES:
- Generate boilerplate and structure
- Apply best practices consistently
- Save 3-4 hours of setup time
- Provide production-ready patterns

Think of it as an expert pair programmer who handles the repetitive setup.
```

### "Can you show the actual /wd:workflow command output?"

```
The command generates an 8-phase implementation plan in ~30 seconds:

Phase 1: Project Foundation (2-3 hours) → with file structure, dependencies, config
Phase 2: Database Schema (1-2 hours) → with models, indexes, connection pooling
Phase 3: Authentication (1-2 hours) → with NextAuth setup, registration API
... etc

Each phase includes:
- Detailed implementation steps
- Code templates
- Time estimates
- Best practices
- Quality gates

See full output in WORKFLOW.md: [link]
```

### "Does this work with other frameworks?"

```
The /wd:workflow command supports multiple frameworks:
✅ Next.js (App Router, Pages Router)
✅ React (Vite, CRA)
✅ Vue.js
✅ SvelteKit
✅ Express/Fastify
✅ NestJS

You specify your stack in the command:
/wd:workflow Create a [feature] with [framework] + [database] + [UI library]

It adapts patterns to your chosen stack.
```

### "How does this compare to create-next-app?"

```
create-next-app gives you:
- Basic Next.js setup
- Empty pages
- Config files

/wd:workflow gives you:
- Complete architecture plan
- Database models with relationships
- Authentication system
- UI components integrated
- Production patterns (connection pooling, security)
- Type-safe from day one
- Best practices documentation

It's like create-next-app + an expert architect + 3 hours of your time.
```

---

## Success Metrics

**Target:**
- 150+ upvotes (match previous plugins post)
- 5,000+ views
- 30-50 comments
- Top 3 post of the week

**Conversion:**
- 5-8% visit GitHub repo
- Discussions about workflows in general
- Questions about implementation details
- Interest in CC France community
```
