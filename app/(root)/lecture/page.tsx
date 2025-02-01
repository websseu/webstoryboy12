import { notFound } from 'next/navigation';
import { getPostsForCategory } from '@/lib/actions/post.actions';
import data from '@/lib/data';
import Link from 'next/link';
import PageTitle from '@/components/page/page-title';

import Image from 'next/image';
import { LuFileSpreadsheet, LuPresentation } from 'react-icons/lu';

export default async function LecturePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // data.ts에서 데이터 가져오기
  const pagesTitle = data.pageTitle.find((page) => page.title === '강의');
  if (!pagesTitle) notFound();

  // searchParams에서 데이터 가져오기
  const resolvedParams = await searchParams;
  const currentPage = resolvedParams.page ? parseInt(resolvedParams.page) : 1;

  // 서버에서 데이터 가져오기
  const { posts, totalPages, totalPosts } = await getPostsForCategory({
    category: 'lecture',
    limit: 9,
    page: currentPage,
  });

  return (
    <>
      <PageTitle
        title={pagesTitle.title}
        description={pagesTitle.desc}
        totalPosts={totalPosts}
        category={pagesTitle.category}
        subjects={pagesTitle.subjects}
      />

      <div className='card__container'>
        {posts.map((post) => (
          <div key={post._id} className='card group'>
            <div className='relative block'>
              <Image
                src={`/${post.category}/${post.subCategory}/${post.images}`}
                alt={`${post.title} 관련 이미지`}
                width={500}
                height={400}
                className='rounded-none transition-all duration-500 ease-in-out group-hover:brightness-75'
              />
              <div className='absolute inset-0 flex gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Link
                  href={`/page/${post.slug}`}
                  className='bg-black p-2 rounded-full'
                >
                  <LuFileSpreadsheet className='h-4 w-4 text-white' />
                </Link>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-black p-2 rounded-full cursor-pointer'
                >
                  <LuPresentation className='h-4 w-4 text-white' />
                </a>
              </div>
            </div>
          </div>
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
