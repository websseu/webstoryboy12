import Link from 'next/link';
import React from 'react';

interface PageTitleProps {
  pagesTitle: {
    title: string;
    desc: string;
    category: string;
    subjects: { title: string; href: string }[];
  };
  length: number;
}

export default function PageTitle({ pagesTitle, length }: PageTitleProps) {
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-nexon mb-3'>
        {pagesTitle.title}
        <span className='small'>{length}</span>
      </h2>
      <p className='text-black300 font-nanum mb-2 leading-6 text-sm'>
        {pagesTitle.desc}
      </p>
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
    </>
  );
}
