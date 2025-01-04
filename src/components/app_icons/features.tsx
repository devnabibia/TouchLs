import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgComponent = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={13}
    viewBox='0 0 48 48'
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <g fill='#FFF'>
      <path
        d='M14 9a4 4 0 1 0-5 3.86v7.28a4 4 0 0 0 0 7.72v7.28a4 4 0 1 0 2 0v-7.28a4 4 0 0 0 0-7.72v-7.28A4 4 0 0 0 14 9zM8 9a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm4 30a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm0-15a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM41 6H18a1 1 0 0 0 0 2h23a1 1 0 0 0 0-2zM18 12h13a1 1 0 1 0 0-2H18a1 1 0 0 0 0 2zM42 37a1 1 0 0 0-1-1H18a1 1 0 0 0 0 2h23a1 1 0 0 0 1-1zM18 40a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2zM41 21H18a1 1 0 0 0 0 2h23a1 1 0 0 0 0-2zM18 27h13a1 1 0 1 0 0-2H18a1 1 0 0 0 0 2z'
        data-original='#FFF'
      />
    </g>
  </svg>
);

export default SvgComponent;
