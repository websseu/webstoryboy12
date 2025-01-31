import { z } from 'zod';
import { PostInputSchema } from './validator';

export type Post = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  subCategory: string;
  components: string;
  description: string;
  isPublished: boolean;
  author: string;
  images: string[];
  tags: string[];
  numReviews: number;
  numViews: number;
  numLikes: number;
  reviews: string[];
  createdAt: string;
  updatedAt: string;
};

export type MenuItem = {
  name: string;
  href: string;
};
export type subject = {
  title: string;
  href: string;
};
export type TitleItem = {
  title: string;
  category: string;
  text: string;
  desc: string;
  subjects: subject[];
};

export type Data = {
  headerMenus: MenuItem[];
  adminMenus: MenuItem[];
  pageTitle: TitleItem[];
};

export type InputData = {
  posts: IPostInput[];
};

export type IPostInput = z.infer<typeof PostInputSchema>;
