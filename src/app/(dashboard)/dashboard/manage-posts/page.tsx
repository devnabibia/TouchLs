import React from 'react';

import prisma from '@/lib/prismaDB';

import ManagePostTable from './ManagePostTable';

export default async function ManagePostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <div className=' '>
      <ManagePostTable posts={posts} />
    </div>
  );
}

export const revalidate = 0;
