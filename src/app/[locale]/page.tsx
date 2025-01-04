import * as React from 'react';
import '@/lib/env';

import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries-app';
import Logos from '@/components/home/logos';
// // import WhatWeDo from '@/components/home/what-we-do';
import WhatWEDo from '@/components/home/what-we-do';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWEDo />
      <Industries />
      <Logos />
      {/* <Engagement /> */}
    </main>
  );
}
