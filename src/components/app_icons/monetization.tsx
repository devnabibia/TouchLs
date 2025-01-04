import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgComponent = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={15}
    viewBox='0 0 64 64'
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <g fill='#FFF'>
      <path
        d='M34.505 30.405H29.493a2.837 2.837 0 0 1-2.833-2.834v-1.76a2.837 2.837 0 0 1 2.833-2.835h5.554a1.5 1.5 0 1 0 0-3h-2.293v-3.81a1.5 1.5 0 1 0-3 0v3.81h-.261a5.841 5.841 0 0 0-5.833 5.835v1.76a5.84 5.84 0 0 0 5.833 5.834h5.012a2.838 2.838 0 0 1 2.835 2.834v1.762a2.837 2.837 0 0 1-2.835 2.834h-5.554a1.5 1.5 0 1 0 0 3h.803v3.999a1.5 1.5 0 1 0 3 0v-3.999h1.751a5.84 5.84 0 0 0 5.835-5.834v-1.762a5.84 5.84 0 0 0-5.835-5.834z'
        data-original='#000000'
      />
      <path
        d='M32 2.125C15.527 2.125 2.125 15.527 2.125 32S15.527 61.875 32 61.875 61.875 48.473 61.875 32 48.473 2.125 32 2.125zm0 56.75C17.181 58.875 5.125 46.819 5.125 32S17.181 5.125 32 5.125 58.875 17.181 58.875 32 46.819 58.875 32 58.875z'
        data-original='#000000'
      />
    </g>
  </svg>
);

export default SvgComponent;
