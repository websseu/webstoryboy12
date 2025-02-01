import data from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ReferencePage() {
  const pagesTitle = data.pageTitle.find((page) => page.title === '레퍼런스');

  if (!pagesTitle) {
    notFound();
  }

  return (
    <>
      <div>dd</div>
    </>
  );
}
