import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgComponent = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={15}
    viewBox='0 0 128 128'
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <path
      d='M126 31h-20v-6a11 11 0 0 0-22 0v6H42a2 2 0 0 0-2 2v7a7 7 0 0 1-14 0v-7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v62a2 2 0 0 0 2 2h20v6a11 11 0 0 0 22 0v-6h42a2 2 0 0 0 2-2v-7a7 7 0 0 1 14 0v7a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V33a2 2 0 0 0-2-2zM42 93a2 2 0 0 0-2 2v8a7 7 0 0 1-14 0v-8a2 2 0 0 0-2-2H4V35h18v5a11 11 0 0 0 22 0v-5h18v18h-5a11 11 0 0 0 0 22h5v18zm82 0h-18v-5a11 11 0 0 0-22 0v5H66V73a2 2 0 0 0-2-2h-7a7 7 0 0 1 0-14h7a2 2 0 0 0 2-2V35h20a2 2 0 0 0 2-2v-8a7 7 0 0 1 14 0v8a2 2 0 0 0 2 2h20z'
      fill='#FFF'
      data-original='#FFF'
    />
  </svg>
);

export default SvgComponent;
