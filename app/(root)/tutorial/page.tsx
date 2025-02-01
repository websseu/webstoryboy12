import data from '@/lib/data';
import { notFound } from 'next/navigation';

export default function TutorialPage() {
  const pagesTitle = data.pageTitle.find((page) => page.title === '튜토리얼');
  if (!pagesTitle) notFound();

  return (
    <>
      <div>dd</div>
    </>
  );
}
