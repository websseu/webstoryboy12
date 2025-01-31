import { Post } from '@/lib/types';
import Card from './card';

interface CardListProps {
  postsList: Post[];
}

export default function CardList({ postsList }: CardListProps) {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6'>
      <Card posts={postsList} />
    </div>
  );
}
