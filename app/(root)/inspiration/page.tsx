import PageTitle from '@/components/title/page-title';
import data from '@/lib/data';
import { notFound } from 'next/navigation';

export default function InspirationPage() {
  const pagesTitle = data.pageTitle.find(
    (page) => page.title === '인스퍼레이션'
  );

  if (!pagesTitle) {
    notFound();
  }

  return (
    <>
      <PageTitle pagesTitle={pagesTitle} />
    </>
  );
}
