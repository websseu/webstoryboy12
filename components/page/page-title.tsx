import Link from 'next/link';

interface PageTitleProps {
  title: string;
  description: string;
  totalPosts: number;
  category: string;
  subjects: { title: string; href: string }[];
}

export default function PageTitle({
  title,
  description,
  totalPosts,
  category,
  subjects,
}: PageTitleProps) {
  return (
    <div className='page__title'>
      <h2>
        {title}
        <span className='small'>{totalPosts}</span>
      </h2>
      <p>{description}</p>
      <div className='flex gap-1'>
        <Link href={`/${category}`} className='subject'>
          All
        </Link>

        {subjects.map((subject) => (
          <Link
            key={subject.href}
            href={`/${category}/${subject.href}`}
            className='subject'
          >
            {subject.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
