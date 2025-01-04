'use client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Post } from '@prisma/client';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { MdCached, MdDelete } from 'react-icons/md';

import firebaseApp from '@/lib/firebase';

import ActionBtns from '@/components/admin/ActionBtns';
import NullDataMessage from '@/components/dashboard/null-data/NullDataMessage';
import Heading from '@/components/Heading';

interface ManagePostTableProps {
  posts: Post[];
}

export default function ManagePostTable({ posts }: ManagePostTableProps) {
  const router = useRouter();
  const storage = getStorage(firebaseApp);

  const handleDeletePost = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (id: string, postCoverImage: any[], postImages: any[]) => {
      toast.success('Deleting post please wait...');

      // Delete images from Firebase Storage
      async function deletePostImages() {
        try {
          for (const item of postImages) {
            if (item.image) {
              const imageRef = ref(storage, item.image);
              await deleteObject(imageRef);
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          // eslint-disable-next-line no-console
          console.log(
            'Error deleting image from Firebase Storage: ',
            error.message
          );
        }
      }

      await deletePostImages();

      async function deletePostCoverImage() {
        try {
          for (const item of postCoverImage) {
            if (item.image) {
              const imageRef = ref(storage, item.image);
              await deleteObject(imageRef);
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          // eslint-disable-next-line no-console
          console.log(
            'Error deleting image from Firebase Storage: ',
            error.message
          );
        }
      }

      await deletePostCoverImage();

      await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          toast.success('Post deleted successfully');
          router.refresh();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          toast.error(error.message);
        });
    },
    [router, storage]
  );

  if (posts.length === 0) {
    return <NullDataMessage>No posts found yet!</NullDataMessage>;
  }

  return (
    <div className='max-w-[900px] m-auto text-xl'>
      <Heading title='Manage posts' center />
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600'>
                ID
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600'>
                Title
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600'>
                Description
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600'>
                Created At
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className='px-6 py-4 border-b border-gray-300 text-sm'>
                  {post.id}
                </td>
                <td className='px-6 py-4 border-b border-gray-300 text-sm'>
                  {post.title}
                </td>
                <td className='px-6 py-4 border-b border-gray-300 text-sm'>
                  {post.description}
                </td>
                <td className='px-6 py-4 border-b border-gray-300 text-sm'>
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className='px-6 py-4 border-b border-gray-300 text-sm'>
                  <div className='flex items-center gap-4'>
                    <ActionBtns
                      icon={MdCached}
                      onClick={() => {
                        router.push(`/dashboard/edit-post/${post.id}`);
                      }}
                    />
                    <ActionBtns
                      icon={MdDelete}
                      onClick={() => {
                        handleDeletePost(
                          post.id,
                          post.postCoverImage,
                          post.postImages
                        );
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
