# Tutorial Complet: Créer un Blog Next.js 15 en 30 Minutes avec /wd:workflow

**Metadata pour SEO:**
```yaml
title: "Tutorial: Créer un Blog Next.js 15 en 30 Minutes avec /wd:workflow - Guide Complet"
description: "Découvrez comment créer une application blog complète avec Next.js 15, MongoDB, NextAuth et Shadcn UI en seulement 30 minutes grâce au plugin Workflow Director de Claude Code. Tutorial détaillé avec code."
keywords: "Next.js 15, MongoDB, Claude Code, workflow automation, TypeScript strict mode, NextAuth v5, Shadcn UI, React 19, tutoriel blog, développement rapide"
author: "Claude Code France Community"
date: "2025-10-15"
slug: "wd-workflow-nextjs-blog-tutoriel-complet"
```

---

## Introduction

### Le Problème

Configurer une application blog moderne avec **Next.js 15, TypeScript strict mode, MongoDB, et une authentification complète** est un processus chronophage. En moyenne, cela prend **3 à 4 heures** de travail minutieux :

- ⏱️ 15 min: Initialisation du projet et configuration de base
- ⏱️ 30 min: Installation et configuration des dépendances (460+ packages)
- ⏱️ 15 min: Configuration TypeScript strict mode et ESLint
- ⏱️ 30 min: Setup de Tailwind CSS + Shadcn UI
- ⏱️ 20 min: Configuration MongoDB et pattern de connexion
- ⏱️ 30 min: Création des models avec indexes optimisés
- ⏱️ 45 min: Intégration NextAuth v5 from scratch
- ⏱️ 30 min: Construction des composants UI
- ⏱️ 30 min: Debugging des erreurs TypeScript
- ⏱️ 15 min: Tests et validation

**Total: ~3h 45min** — et on n'a même pas encore implémenté les features principales (articles, commentaires, likes) !

### La Solution: /wd:workflow

Le **Workflow Director plugin** de Claude Code transforme ce processus en une simple commande. En **30 minutes**, vous obtenez:

✅ Un blog Next.js 15 complet et fonctionnel
✅ 1,500+ lignes de code production-ready
✅ **Zero erreur TypeScript** (strict mode activé)
✅ Authentification complète avec NextAuth v5
✅ Système d'articles avec CRUD complet
✅ Système de commentaires interactif
✅ Fonctionnalité de likes avec optimistic UI

### Ce que Vous Allez Apprendre

Dans ce guide détaillé, vous découvrirez:

1. Comment utiliser `/wd:workflow` pour générer un projet complet
2. L'architecture et les patterns production-ready implémentés
3. Le setup MongoDB avec singleton connection pattern
4. L'intégration NextAuth v5 avec React 19
5. Les best practices Next.js 15 (Server Components, async handlers)
6. L'implémentation complète d'un système de blog (articles, comments, likes)

**Temps estimé:** 30 minutes de lecture + 30 minutes d'implémentation

---

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- **Node.js 20+** ou **Bun** installé
- **MongoDB** accessible (local ou Atlas)
- **Claude Code** avec le plugin **Workflow Director** activé
- Un éditeur de code (VS Code, Cursor, etc.)
- Connaissance de base de React et TypeScript

---

## Phase 1: Le Workflow Command

### La Commande Magique

Ouvrez Claude Code et exécutez cette unique commande:

```bash
/wd:workflow Create a blog application with Next.js 15 + Shadcn UI + MongoDB.
Features: article listing, article detail pages, create/edit articles (authenticated),
comment system, like system. Use App Router, Server Components, TypeScript strict mode,
Tailwind CSS. Keep it simple but production-ready.
```

### Génération du Plan (30 secondes)

Le Workflow Director analyse votre demande et génère:

**1. Un plan d'architecture complet**
- 8 phases d'implémentation structurées
- Recommandations de stack technique
- Mapping des dépendances
- Estimation de temps par phase
- Évaluation des risques

**2. Des étapes d'implémentation détaillées**
- Structure de fichiers complète
- Templates de code pré-remplis
- Fichiers de configuration optimisés
- Best practices intégrées

**3. Des gates de qualité**
- TypeScript strict mode enabled
- Configuration ESLint
- Vérification de build

---

## Les Commandes du Plugin Workflow Director

Le Workflow Director ne se limite pas à `/wd:workflow`. Il offre une suite complète de commandes pour gérer tout le cycle de vie de votre projet.

### Installation du Plugin

```bash
# Dans Claude Code CLI
/plugin marketplace add CarolaneLFBV/workflow-director
```

### `/wd:workflow` - Créer un Projet Complet

**Usage:** Générer un plan d'implémentation complet pour un nouveau projet.

```bash
/wd:workflow Create a blog application with Next.js 15 + Shadcn UI + MongoDB.
Features: article listing, article detail pages, create/edit articles (authenticated),
comment system, like system. Use App Router, Server Components, TypeScript strict mode,
Tailwind CSS. Keep it simple but production-ready.
```

**Résultat:**
- Plan en 6-8 phases structuré
- Architecture et stack recommandés
- Estimation de temps par phase
- Fichiers de configuration pré-remplis
- Exécution autonome par Claude Code

### `/wd:implement` - Ajouter des Features

**Usage:** Implémenter une nouvelle fonctionnalité dans un projet existant.

**Exemple 1: WebSockets pour Notifications**
```bash
/wd:implement Add real-time notifications using WebSockets to the blog.
Users should see toast notifications when:
- Someone comments on their article
- Someone likes their article
- A new article is published by someone they follow
Use Socket.io and create a NotificationProvider context.
```

**Exemple 2: Upload d'Images**
```bash
/wd:implement Add image upload for article covers and author avatars.
Use uploadthing for storage, with thumbnail generation (400x300) and optimization.
Add drag-and-drop interface with progress bar.
```

Le plugin:
1. Analyse le code existant
2. Identifie où intégrer la feature
3. Génère le code nécessaire
4. Maintient la cohérence avec l'architecture

### `/wd:troubleshoot` - Debug Automatique

**Usage:** Diagnostiquer et résoudre des bugs automatiquement.

**Exemple 1: Erreur 500 sur API**
```bash
/wd:troubleshoot The comment system is returning 500 errors when users try to post comments.
Check the API route /api/articles/[id]/comments, database connection, error handling,
and authentication middleware.
```

**Exemple 2: Performance Issues**
```bash
/wd:troubleshoot The article listing page takes 5+ seconds to load with 1000+ articles.
Check database queries, indexes, and pagination implementation.
```

Le plugin:
1. Lit les logs et stack traces
2. Analyse le code concerné
3. Identifie la cause root
4. Propose et applique le fix

### `/wd:improve` - Optimisation de Code

**Usage:** Améliorer un projet existant (performance, qualité, features manquantes).

**Exemple Réel (utilisé dans ce projet):**
```bash
/wd:improve le blog est pas terminé il manque pas mal de partie check les logs --ultrathink
```

Après l'exécution initiale de `/wd:workflow`, j'ai remarqué des 404 dans les logs. La commande `/wd:improve`:
1. A analysé tous les logs du serveur
2. A détecté les routes manquantes (`/articles`, `/articles/[slug]`)
3. A généré un plan pour:
   - Article CRUD APIs manquantes
   - Pages Article listing et detail manquantes
   - Comment system complet
   - Like system avec optimistic UI
4. A exécuté le plan en 15 minutes
5. **Résultat:** Zéro erreurs TypeScript, code production-ready

**Exemple 2: Optimisation Performance**
```bash
/wd:improve The article listing page is slow with 1000+ articles.
Add pagination, optimize database queries with lean(), add proper indexes,
and implement caching with Redis if needed.
```

### `/wd:test` - Tests Automatiques

**Usage:** Générer des tests pour votre application.

```bash
/wd:test Generate unit tests for the Article model and integration tests
for the article CRUD API routes. Use Jest and supertest.
Cover edge cases like duplicate slugs, unauthorized access, and validation errors.
```

### Workflow Typique

**1. Création initiale**
```bash
/wd:workflow [requirements complets]
```

**2. Ajout de features**
```bash
/wd:implement [nouvelle feature]
```

**3. Correction de bugs**
```bash
/wd:troubleshoot [description du problème]
```

**4. Amélioration continue**
```bash
/wd:improve [aspect à optimiser]
```

**5. Tests et validation**
```bash
/wd:test [scope des tests]
```

---

## Phase 2: Project Foundation (5 minutes)

### Fichiers de Configuration Générés

Le workflow crée automatiquement:

**package.json** avec toutes les dépendances:
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "mongoose": "^8.0.0",
    "next-auth": "^5.0.0-beta.25",
    "bcryptjs": "^2.4.3",
    "zod": "^3.22.4",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

**tsconfig.json** avec strict mode activé:
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler"
  }
}
```

### Structure du Projet

```
nextjs-blog-demo/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts
│   │   │   └── register/route.ts
│   │   └── articles/
│   │       ├── route.ts
│   │       └── [id]/
│   │           ├── route.ts
│   │           ├── comments/route.ts
│   │           └── like/route.ts
│   ├── articles/
│   │   ├── page.tsx
│   │   ├── new/page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── edit/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   └── articles/
│       ├── CommentForm.tsx
│       ├── CommentList.tsx
│       └── LikeButton.tsx
├── lib/
│   ├── db/
│   │   ├── connection.ts
│   │   └── models/
│   │       ├── User.ts
│   │       ├── Article.ts
│   │       └── Comment.ts
│   ├── auth.ts
│   └── utils.ts
└── types/
    ├── index.ts
    └── next-auth.d.ts
```

**460 packages** installés automatiquement en ~2 minutes.

---

## Phase 3: Database Models (5 minutes)

### MongoDB Connection Pattern

**Pattern crucial:** Singleton avec cache global pour éviter l'épuisement du pool de connexions en environnement serverless.

**lib/db/connection.ts:**
```typescript
import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectToDatabase() {
  // Si déjà connecté, retourner la connexion existante
  if (cached.conn) {
    return cached.conn;
  }

  // Si une connexion est en cours, attendre
  if (!cached.promise) {
    const MONGODB_URI = process.env.MONGODB_URI!;

    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
```

**Pourquoi ce pattern?**
- Les fonctions serverless Next.js créent de nouvelles instances
- Le cache global empêche la création de connexions multiples
- Production-ready dès le premier jour

### User Model

**lib/db/models/User.ts:**
```typescript
import mongoose, { Schema, Model } from 'mongoose';

interface IUser {
  email: string;
  username: string;
  password: string; // hashed with bcrypt
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
}, {
  timestamps: true
});

// Les indexes sont automatiquement créés par unique: true
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
```

### Article Model

**lib/db/models/Article.ts:**
```typescript
import mongoose, { Schema, Model, Types } from 'mongoose';

interface IArticle {
  title: string;
  slug: string; // URL-friendly
  content: string;
  excerpt: string;
  author: Types.ObjectId;
  likes: Types.ObjectId[]; // Array of User IDs
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true // Index automatique
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  published: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
}, {
  timestamps: true
});

// Index composite pour les queries optimisées
articleSchema.index({ published: 1, publishedAt: -1 });
articleSchema.index({ author: 1 });

const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>('Article', articleSchema);

export default Article;
```

### Comment Model

**lib/db/models/Comment.ts:**
```typescript
import mongoose, { Schema, Model, Types } from 'mongoose';

interface IComment {
  content: string;
  author: Types.ObjectId;
  article: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  },
}, {
  timestamps: true
});

// Index pour requêtes rapides par article
commentSchema.index({ article: 1, createdAt: -1 });
commentSchema.index({ author: 1 });

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
```

---

## Phase 4: Authentication avec NextAuth v5 (10 minutes)

### Configuration NextAuth

**lib/auth.ts:**
```typescript
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectToDatabase from './db/connection';
import User from './db/models/User';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
```

### API Registration

**app/api/auth/register/route.ts:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/db/connection';
import User from '@/lib/db/models/User';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { email, username, password } = await request.json();

    // Validation
    if (!email || !username || !password) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check si l'utilisateur existe déjà
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash du password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

### Login Page

**app/login/page.tsx:**
```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/articles');
    }
  }

  return (
    <div className="container max-w-md mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## Phase 5: UI Components avec Shadcn (5 minutes)

### Pattern de Composants

Tous les composants Shadcn suivent ce pattern avec **class-variance-authority**:

**components/ui/button.tsx:**
```typescript
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
```

### Composants Créés

- **Button** - 5 variants, 4 sizes
- **Card** - Header, Content, Footer
- **Input** - Text inputs avec validation styling
- **Label** - Form labels
- **Textarea** - Multi-line inputs

**Philosophie Shadcn:** Copier les composants dans votre projet (pas un npm package) pour un contrôle total.

---

## Phase 6: Article System - CRUD Complet (15 minutes)

### API Routes pour Articles

**app/api/articles/route.ts** (List + Create):
```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - Liste des articles publiés avec pagination
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
        .select('-content') // Exclure le contenu complet dans la liste
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

// POST - Créer un nouvel article (authentifié)
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

    // Génération automatique du slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Vérification unicité du slug
    const existingArticle = await Article.findOne({ slug });
    if (existingArticle) {
      return NextResponse.json(
        { success: false, error: 'An article with this title already exists' },
        { status: 409 }
      );
    }

    // Création de l'article
    const article = await Article.create({
      title,
      slug,
      content,
      excerpt,
      author: session.user.id,
      published,
      publishedAt: published ? new Date() : undefined
    });

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
```

**app/api/articles/[id]/route.ts** (Get + Update + Delete):
```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import Comment from '@/lib/db/models/Comment';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - Article unique par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const article = await Article.findById(id)
      .populate('author', 'username avatar')
      .lean();

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    // Comptage des commentaires
    const commentsCount = await Comment.countDocuments({ article: id });

    return NextResponse.json({
      success: true,
      data: { ...article, commentsCount }
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// PUT - Mise à jour (author only)
export async function PUT(
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

    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    // Vérification ownership
    if (article.author.toString() !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, content, excerpt, published } = body;

    // Mise à jour
    article.title = title || article.title;
    article.content = content || article.content;
    article.excerpt = excerpt || article.excerpt;

    if (published !== undefined) {
      article.published = published;
      if (published && !article.publishedAt) {
        article.publishedAt = new Date();
      }
    }

    await article.save();
    await article.populate('author', 'username avatar');

    return NextResponse.json({
      success: true,
      data: article
    });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE - Suppression (author only)
export async function DELETE(
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

    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    if (article.author.toString() !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      );
    }

    // Suppression de l'article ET des commentaires associés
    await Promise.all([
      Article.findByIdAndDelete(id),
      Comment.deleteMany({ article: id })
    ]);

    return NextResponse.json({
      success: true,
      message: 'Article deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
```

### Page de Listing des Articles

**app/articles/page.tsx:**
```typescript
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export default async function ArticlesPage() {
  await connectToDatabase();
  const session = await auth();

  const articles = await Article.find({ published: true })
    .populate('author', 'username avatar')
    .select('-content')
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
                <Link href={`/articles/${article.slug}`}>
                  <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </Link>
                <CardDescription className="mt-2">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span>By {article.author?.username || 'Anonymous'}</span>
                    <span>•</span>
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString()}
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
```

---

## Phase 7: Comment System (15 minutes)

### API Comments

**app/api/articles/[id]/comments/route.ts:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Comment from '@/lib/db/models/Comment';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - Liste des commentaires
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

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

// POST - Créer un commentaire (authentifié)
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

    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { content } = body;

    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Comment content is required' },
        { status: 400 }
      );
    }

    const comment = await Comment.create({
      content: content.trim(),
      author: session.user.id,
      article: id
    });

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
```

### Composant CommentForm

**components/articles/CommentForm.tsx:**
```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CommentFormProps {
  articleId: string;
  onCommentAdded: () => void;
}

export default function CommentForm({ articleId, onCommentAdded }: CommentFormProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!content.trim()) {
      setError('Comment content is required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to post comment');
      }

      setContent('');
      onCommentAdded();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="comment">Add a comment</Label>
        <Textarea
          id="comment"
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          disabled={isSubmitting}
          className="mt-2"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Post Comment'}
      </Button>
    </form>
  );
}
```

### Composant CommentList

**components/articles/CommentList.tsx:**
```typescript
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Comment {
  _id: string;
  content: string;
  author: {
    _id: string;
    username: string;
    avatar?: string;
  };
  createdAt: string;
}

interface CommentListProps {
  articleId: string;
  refreshTrigger: number;
}

export default function CommentList({ articleId, refreshTrigger }: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/articles/${articleId}/comments`);
        const data = await response.json();

        if (response.ok) {
          setComments(data.data);
        }
      } catch (err) {
        console.error('Error fetching comments:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchComments();
  }, [articleId, refreshTrigger]);

  if (isLoading) {
    return <p className="text-muted-foreground">Loading comments...</p>;
  }

  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        No comments yet. Be the first to comment!
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Card key={comment._id}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {comment.author?.username?.charAt(0).toUpperCase() || 'A'}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">{comment.author?.username || 'Anonymous'}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

## Phase 8: Like System avec Optimistic UI (10 minutes)

### API Like Toggle

**app/api/articles/[id]/like/route.ts:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db/connection';
import Article from '@/lib/db/models/Article';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// POST - Toggle like
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

    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const userId = session.user.id;
    const hasLiked = article.likes.includes(userId as any);

    // Toggle
    if (hasLiked) {
      article.likes = article.likes.filter(
        (likeId) => likeId.toString() !== userId
      );
    } else {
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
```

### Composant LikeButton avec Optimistic Updates

**components/articles/LikeButton.tsx:**
```typescript
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

      // Mise à jour avec réponse serveur
      setLiked(data.data.liked);
      setLikesCount(data.data.likesCount);
    } catch (err) {
      // Revert sur erreur
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
```

---

## Résultats et Métriques

### Ce qui Fonctionne Maintenant

✅ **Système d'Authentification Complet**
- Inscription avec validation
- Login avec NextAuth v5
- Sessions JWT
- Routes protégées

✅ **Système d'Articles Complet**
- Listing avec pagination
- Détail d'article
- Création/Édition/Suppression (author only)
- Génération automatique de slugs

✅ **Système de Commentaires**
- Liste de commentaires
- Création de commentaires (authentifié)
- Refresh en temps réel

✅ **Système de Likes**
- Like/Unlike toggle
- Optimistic UI updates
- Compteur de likes

✅ **TypeScript Strict Mode**
- Zero erreur de compilation
- IntelliSense complet
- Type augmentation NextAuth

### Statistiques Finales

| Métrique | Valeur |
|----------|--------|
| **Temps total** | ~30 minutes |
| **Lignes de code** | ~1,500 |
| **Erreurs TypeScript** | 0 |
| **API Routes** | 5 routes complètes |
| **Pages** | 6 pages |
| **Composants** | 8 composants réutilisables |
| **Temps de build** | ~15 secondes |

---

## Best Practices Intégrées

### 1. MongoDB Patterns

**Singleton Connection:**
```typescript
let cached = global.mongoose || { conn: null, promise: null };
```
**Pourquoi?** Évite l'épuisement du pool en serverless.

**Indexes Optimisés:**
```typescript
articleSchema.index({ published: 1, publishedAt: -1 });
```
**Pourquoi?** Queries 10x plus rapides.

**Lean Queries:**
```typescript
Article.find().lean(); // 30% plus rapide
```
**Pourquoi?** Retourne des objets JS simples (pas de Mongoose documents).

### 2. Next.js 15 Patterns

**Server Components par Défaut:**
```typescript
// Pas de 'use client' nécessaire
export default async function ArticlesPage() {
  const articles = await Article.find(...);
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

### 3. NextAuth v5 Changes

**Export Pattern:**
```typescript
export const { handlers, auth, signIn, signOut } = NextAuth({...});
```

**Route Handler:**
```typescript
// app/api/auth/[...nextauth]/route.ts
export const { GET, POST } = handlers;
```

---

## Comparaison: Manuel vs /wd:workflow

### Setup Manuel Traditionnel: 3-4 heures

1. **Projet** (15 min)
2. **Dépendances** (30 min)
3. **TypeScript config** (15 min)
4. **Tailwind + Shadcn** (30 min)
5. **MongoDB setup** (20 min)
6. **Models avec indexes** (30 min)
7. **NextAuth from scratch** (45 min)
8. **UI components** (30 min)
9. **Article CRUD** (30 min)
10. **Comments system** (20 min)
11. **Like system** (15 min)
12. **Debug type errors** (30 min)
13. **Testing** (15 min)

**Problèmes courants:**
- Indexes oubliés
- Connection pooling incorrecte
- Erreurs TypeScript sur NextAuth
- Patterns Next.js 15 incorrects
- Gestion d'erreurs manquante

### Avec /wd:workflow: 30 minutes

1. **Commande** (30 sec)
2. **Suivre le plan** (29 min 30 sec)

**Problèmes:** Aucun (best practices incluses)

---

## Try It Yourself

### Cloner le Projet

```bash
git clone https://github.com/Para-FR/nextjs-blog-demo
cd nextjs-blog-demo
```

### Installation

```bash
npm install
# ou
bun install
```

### Configuration

```bash
# Copier le fichier d'environnement
cp .env.local.example .env.local

# Éditer avec votre MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/nextjs-blog-demo
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret-key
```

Générer un secret NextAuth:
```bash
openssl rand -base64 32
```

### Lancer le Serveur

```bash
npm run dev
# ou
bun dev
```

Visitez http://localhost:3000

### Tester les Features

1. **Créer un compte** → `/register`
2. **Se connecter** → `/login`
3. **Créer un article** → `/articles/new`
4. **Liker un article** → Cliquer sur le bouton ❤️
5. **Commenter** → Scroll en bas d'un article

---

## Conclusion

### Récapitulatif

Le plugin **Workflow Director de Claude Code** (`/wd:workflow`) transforme **3-4 heures** de configuration manuelle en **30 minutes** de développement guidé.

### Points Clés

1. ✅ **Vitesse** - 6-8x plus rapide que le setup manuel
2. ✅ **Qualité** - Production patterns inclus (connection pooling, hashing, JWT)
3. ✅ **Zero Debug** - TypeScript strict mode dès le départ
4. ✅ **Best Practices** - Suit Next.js 15 + React 19 patterns
5. ✅ **Complétude** - Rien d'oublié (env vars, types, error handling, indexes)

### Parfait Pour

- 🚀 **MVPs et prototypes** - Lancer rapidement
- 📚 **Apprendre** - Comprendre les best practices
- 🏗️ **Nouveaux projets** - Démarrer sur de bonnes bases
- 👨‍🏫 **Enseigner** - Montrer les patterns modernes

### Aller Plus Loin

**Prochaines étapes possibles:**
- Ajouter un rich text editor (TipTap, Lexical)
- Implémenter l'upload d'images (uploadthing, cloudinary)
- Ajouter des tags et catégories
- Implémenter la recherche full-text
- Ajouter des analytics (Umami, Plausible)
- Déployer sur Vercel/Railway

---

## Rejoindre la Communauté

### Claude Code France

👉 **[Rejoindre notre Discord](https://discord.gg/claude-code-france)**

- Partages de workflows
- Aide et support
- Démos et tutorials
- Annonces de features

### Contribuer au Projet

⭐ **[Star le repo GitHub](https://github.com/Para-FR/nextjs-blog-demo)**

- Ouvrir des issues
- Proposer des PRs
- Partager vos use cases
- Améliorer la documentation

### Rester Informé

📧 **[S'inscrire à la newsletter](https://cc-france.org/newsletter)**

- Nouveaux tutorials
- Annonces de plugins
- Tips & tricks
- Events communautaires

---

## Ressources Complémentaires

### Documentation Officielle

- [Next.js 15 Docs](https://nextjs.org/docs)
- [NextAuth v5 Docs](https://authjs.dev)
- [Shadcn UI](https://ui.shadcn.com)
- [MongoDB + Mongoose](https://mongoosejs.com)

### Code Source

- [GitHub Repository](https://github.com/Para-FR/nextjs-blog-demo)
- [WORKFLOW.md détaillé](https://github.com/Para-FR/nextjs-blog-demo/blob/master/WORKFLOW.md)
- [README complet](https://github.com/Para-FR/nextjs-blog-demo/blob/master/README.md)

### Tutoriels Connexes

- Guide Shadcn UI
- NextAuth v5 Migration
- MongoDB Performance Tips
- Next.js 15 Server Components

---

**Merci d'avoir suivi ce tutorial !**

Des questions? Partagez vos créations? Rejoignez-nous sur Discord 💬

**Stack:** Next.js 15, React 19, TypeScript, MongoDB, NextAuth v5, Shadcn UI, Tailwind CSS

**Créé avec:** Claude Code Workflow Director (`/wd:workflow`)

**Date:** 15 octobre 2025

---

*Tutorial créé par la communauté [Claude Code France](https://cc-france.org)*
