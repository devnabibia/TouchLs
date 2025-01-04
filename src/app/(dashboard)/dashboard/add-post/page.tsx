import dynamic from 'next/dynamic';

const PostForm = dynamic(() => import('@/components/dashboard/PostForm'), {
  ssr: false,
});

export default function ManagePostPage() {
  return (
    <div className=''>
      <PostForm />
    </div>
  );
}
