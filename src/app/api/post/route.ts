import { NextResponse } from 'next/server';

import prisma from '@/lib/prismaDB';

import { getCurrentUser } from '@/utils/getCurrentUser';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Admin not found!' }, { status: 404 });
    }
    const body = await request.json();
    const { title, description, postCoverImage, postImages } = body;

    if (!title || !description || !postCoverImage || !postImages) {
      return NextResponse.json(
        { error: 'Missing required fields!' },
        { status: 400 }
      );
    }
    const post = await prisma.post.create({
      data: {
        title,
        description,
        postCoverImage,
        postImages,
      },
    });

    return NextResponse.json(post, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log(error.message);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({
      posts: posts || [],
    });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 404 });
  }
}
