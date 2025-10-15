import { Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  username: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IArticle {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: Types.ObjectId | IUser;
  likes: Types.ObjectId[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IComment {
  _id: Types.ObjectId;
  content: string;
  author: Types.ObjectId | IUser;
  article: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
