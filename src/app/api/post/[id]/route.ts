import { NextResponse } from 'next/server';

import prisma from '@/lib/prismaDB';

import { getCurrentUser } from '@/utils/getCurrentUser';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { title, description, postCoverImage, postImages } = body;
  if (!title || !description || !postCoverImage || !postImages) {
    return new Response('all fields are required!', { status: 400 });
  }
  const user = await getCurrentUser();
  if (user?.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (post) {
    const updatedPost = await prisma.post.update({
      where: { id: params.id },
      data: { title, description, postCoverImage, postImages },
    });

    return NextResponse.json(updatedPost);
  } else {
    return new Response('Post not found', { status: 404 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }
  const post = await prisma.post.delete({ where: { id: params.id } });

  return NextResponse.json(post, { status: 204 });
}
