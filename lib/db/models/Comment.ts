import mongoose, { Schema, Model } from 'mongoose';
import type { IComment } from '@/types';

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

commentSchema.index({ article: 1, createdAt: -1 });
commentSchema.index({ author: 1 });

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
