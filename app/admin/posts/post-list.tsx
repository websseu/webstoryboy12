import { getAllPosts } from '@/lib/actions/post.actions';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export default async function PostList() {
  const appPosts = await getAllPosts();
  const totalPosts = appPosts.length;

  return (
    <div className='post__list'>
      <div className='flex items-center justify-center mb-6'>
        <h2 className='text-xl font-nexon'>게시물 목록</h2>
        <span className='small'>{totalPosts}</span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>제목</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead>서브</TableHead>
            <TableHead>출판 여부</TableHead>
            <TableHead>리뷰 수</TableHead>
            <TableHead>조회수</TableHead>
            <TableHead>좋아요</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appPosts.map((post) => (
            <TableRow key={post._id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.subCategory}</TableCell>
              <TableCell>{post.isPublished ? 'Yes' : 'No'}</TableCell>
              <TableCell>{post.numReviews}</TableCell>
              <TableCell>{post.numViews}</TableCell>
              <TableCell>{post.numLikes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
