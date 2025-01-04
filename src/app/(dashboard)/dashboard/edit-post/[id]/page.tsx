import dynamic from 'next/dynamic';

import prisma from '@/lib/prismaDB';

const PostForm = dynamic(() => import('@/components/dashboard/PostForm'), {
  ssr: false,
});

interface EditPostProps {
  params: { id: string };
}

export default async function EditPost({ params }: EditPostProps) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });

  return (
    <div>
      <PostForm post={post} />
    </div>
  );
}
