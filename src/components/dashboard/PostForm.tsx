'use client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Post } from '@prisma/client';
import axios from 'axios';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';

import 'easymde/dist/easymde.min.css';

import firebaseApp from '@/lib/firebase';

import LinearWithValueLabel from '@/components/dashboard/LinearProgressWithLabel';
import Heading from '@/components/Heading';

import { cn } from '@/utils/cn';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

type UploadImageType = {
  image: string;
};

export default function PostForm({ post }: { post?: Post | null }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [postImagesIsLoading, setpostImagesLoading] = useState(false);
  const [postImagesProgress, setPostImagesProgress] = useState(0);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const uploadedPostCoverImage: UploadImageType[] = [];
    const uploadedPostImages: UploadImageType[] = [];

    async function handlePostCoverImageUpload() {
      const item = data.postCoverImage[0];
      try {
        const fileName = new Date().getTime() + item.name;
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, `postCoverImage/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, item);
        await new Promise<void>((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(progress);
              // eslint-disable-next-line no-console
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  // eslint-disable-next-line no-console
                  console.log('Upload is paused');
                  setLoading(false);
                  break;
                case 'running':
                  // eslint-disable-next-line no-console
                  console.log('Upload is running');
                  setLoading(true);
                  break;
              }
            },
            (error) => {
              // eslint-disable-next-line no-console
              console.log('Error uploading image', error);
              setLoading(false);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  uploadedPostCoverImage.push({ image: downloadURL });
                  setLoading(false);
                  // eslint-disable-next-line no-console
                  console.log('File available at', downloadURL);
                  resolve();
                })
                .catch((err) => {
                  // eslint-disable-next-line no-console
                  console.log('Error getting the downloadURL');
                  reject(err);
                });
            }
          );
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error in uploading image', error);
        toast.error('Error in uploading image');
        setLoading(false);
      }
    }

    // upload post images to firebase
    async function handlePostImagesUpload() {
      setpostImagesLoading(true);
      if (post) {
        toast.success('updating post, please wait...');
      } else {
        toast.success('creating post, please wait...');
      }
      try {
        for (const item of data.postImages) {
          // eslint-disable-next-line no-console
          console.table('Uploading image', item);

          const fileName = new Date().getTime() + item.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `postImages/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, item);
          await new Promise<void>((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPostImagesProgress(progress);
                // eslint-disable-next-line no-console
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    // eslint-disable-next-line no-console
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    // eslint-disable-next-line no-console
                    console.log('Upload is running');
                    break;
                }
              },
              (error) => {
                // eslint-disable-next-line no-console
                console.log('Error uploading image', error);
                reject(error);
                setpostImagesLoading(false);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedPostImages.push({ image: downloadURL });
                    // eslint-disable-next-line no-console
                    console.log('File available at', downloadURL);
                    resolve();
                    setpostImagesLoading(false);
                  })
                  .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log('Error getting the downloadURL');
                    reject(err);
                    setpostImagesLoading(false);
                  });
              }
            );
          });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error in uploading image', error);
        toast.error('Error in uploading image');
        setpostImagesLoading(false);
      }
    }

    await handlePostImagesUpload();
    await handlePostCoverImageUpload();
    // eslint-disable-next-line no-console
    console.log(uploadedPostCoverImage);
    // eslint-disable-next-line no-console
    console.log(uploadedPostImages);

    const postData = {
      ...data,
      postCoverImage: uploadedPostCoverImage,
      postImages: uploadedPostImages,
    };

    // save post to db

    if (post) {
      await axios
        .patch(`/api/post/${post?.id}`, postData)
        .then(() => {
          router.refresh();
          toast.success('Post updated successfully');
          reset();
        })
        .catch((err) => {
          toast.error('Error while updating post to db!', err);
        });
    } else {
      await axios
        .post(`/api/post`, postData)
        .then(() => {
          router.refresh();
          toast.success('Post created successfully');
          reset();
        })
        .catch((err) => {
          toast.error('Error while saving post to db!', err);
        });
    }
  };

  return (
    <div className='lg:max-w-[40rem]  mx-auto lg:shadow-md lg:p-12 lg:rounded-md my-12'>
      <Heading title={post ? 'Update Post' : 'Create Post'} center />
      <form className='flex flex-col gap-3 ' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-1'>
          <label htmlFor='title'>Title</label>
          <input
            {...register('title', { required: 'This field is required' })}
            type='text'
            id='title'
            className={cn(
              'border-2 border-slate-400 outline-none  focus:border-slate-500 px-2 py-2 rounded',
              { 'border-rose-400': errors['title'] }
            )}
            defaultValue={post?.title}
          />
        </div>
        <div className='form-item-container'>
          <label htmlFor='description'>Description</label>
          <Controller
            name='description'
            control={control}
            defaultValue={post?.description}
            render={({ field }) => (
              <SimpleMDE
                placeholder='Description'
                {...field}
                className={cn(
                  'rounded border-2 border-slate-400 outline-none  focus:border-slate-500',
                  {
                    'border-rose-500': errors['description'],
                  }
                )}
              />
            )}
          />
        </div>
        <div className='form-item-container'>
          <label htmlFor='postCoverImage'>Upload post cover image</label>
          <input
            type='file'
            id='postCoverImage'
            {...register('postCoverImage', {
              required: 'post cover image is required',
            })}
            className={cn(
              'border-2 border-slate-400 outline-none  focus:border-slate-500 px-2 py-2 rounded cursor-pointer',
              { 'border-rose-400': errors['postCoverImage'] }
            )}
          />
          <LinearWithValueLabel
            isLoading={postImagesIsLoading}
            progress={postImagesProgress}
          />
        </div>

        <div className='form-item-container'>
          <label htmlFor='postImages'> Upload post images</label>
          <input
            multiple
            type='file'
            id='postImages'
            {...register('postImages', { required: 'post images is required' })}
            className={cn(
              'border-2 border-slate-400 outline-none  focus:border-slate-500 px-2 py-2 rounded cursor-pointer',
              { 'border-rose-400': errors['postImages'] }
            )}
          />
          <LinearWithValueLabel isLoading={isLoading} progress={progress} />
        </div>

        <button
          type='submit'
          className={cn(' mt-3 bg-blue-900 p-4 text-white', {
            'cursor-not-allowed': isSubmitting,
          })}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subtting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
