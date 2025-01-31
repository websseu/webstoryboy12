import { Post } from '@/lib/types';

interface CardProps {
  posts: Post[];
}

export default function Card({ posts }: CardProps) {
  return <div>{posts.length}</div>;
}
