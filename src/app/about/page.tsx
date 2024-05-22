import { getDataFromVercelBlog } from '@/actions';
import { Header } from '@/components';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Page() {
  const data = await getDataFromVercelBlog();
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Header />
      <Link href={'/'}>Home</Link>
      About page
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((post, i) => {
          return <div key={i}>{post.title}</div>;
        })}
      </Suspense>
    </main>
  );
}
