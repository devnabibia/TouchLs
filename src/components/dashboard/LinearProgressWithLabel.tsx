import * as React from 'react';

interface LinearProgressWithLabelProps {
  value: number;
}

function LinearProgressWithLabel(props: LinearProgressWithLabelProps) {
  return (
    <div className='flex items-center'>
      <span className='text-sm mx-1'>uploading</span>
      <div className='flex-grow mx-1'>
        <div className='w-full bg-gray-200 rounded'>
          <div
            className='bg-blue-500 h-2 rounded'
            style={{ width: `${props.value}%` }}
          ></div>
        </div>
      </div>
      <div className='min-w-[35px] text-sm text-gray-600'>
        {`${Math.round(props.value)}%`}
      </div>
    </div>
  );
}

interface LinearWithValueLabelProps {
  progress: number;
  isLoading: boolean;
}

export default function LinearWithValueLabel({
  progress,
  isLoading,
}: LinearWithValueLabelProps) {
  return (
    <div className='w-full my-1'>
      {isLoading ? (
        <LinearProgressWithLabel value={isLoading ? progress : 0} />
      ) : null}
    </div>
  );
}
