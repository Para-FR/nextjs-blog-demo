import mongoose, { Schema, Model } from 'mongoose';
import type { IArticle } from '@/types';

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
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

articleSchema.index({ published: 1, publishedAt: -1 });
articleSchema.index({ slug: 1 });
articleSchema.index({ author: 1 });

const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>('Article', articleSchema);

export default Article;
