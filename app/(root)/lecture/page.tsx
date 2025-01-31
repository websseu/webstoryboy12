import { notFound } from 'next/navigation';
import { getPostsForCategory } from '@/lib/actions/post.actions';
import data from '@/lib/data';
import Link from 'next/link';

export default async function LecturePage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const pagesTitle = data.pageTitle.find((page) => page.title === '강의');

  if (!pagesTitle) notFound();

  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

  const { posts, totalPages } = await getPostsForCategory({
    category: 'lecture',
    limit: 9,
    page: currentPage,
  });

  return (
    <>
      <div className='page__container'>
        <h2>
          {pagesTitle.title}
          <span className='small'>{posts.length}</span>
        </h2>
        <p>{pagesTitle.desc}</p>
        <div className='flex gap-1'>
          <Link href={`/${pagesTitle.category}`} className='subject'>
            All
          </Link>

          {pagesTitle.subjects.map((subject) => (
            <Link
              key={subject.href}
              href={`/${pagesTitle.category}/${subject.href}`}
              className='subject'
            >
              {subject.title}
            </Link>
          ))}
        </div>
      </div>

      <div className='card__container'>
        {posts.map((post) => (
          <div key={post._id}>{post.title}</div>
        ))}
      </div>

      <div className='pagination'>
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`} className='pagination-button'>
            이전 페이지
          </Link>
        )}

        <span className='current-page'>
          {currentPage} / {totalPages}
        </span>

        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`} className='pagination-button'>
            다음 페이지
          </Link>
        )}
      </div>
    </>
  );
}
