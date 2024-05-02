'use client';

import { useState } from 'react';
import { Navigation, Header } from '@/components/layout';
import { Banner, Cart, Categories, Orders, Stat } from '@/components/sections';
import { stats } from '@/dummy-data/stats';

export default function Home() {

  const [expanded, setExpanded] = useState(false);

  const navOpen = 'app-nav absolute md:block md:static z-10 right-0 m-1 md:m-0';
  const navClosed = 'app-nav hidden md:block z-10';

  return (
    <div className="app md:grid gap-6 p-6 lg:p-8 min-h-screen">

      <Header toggle={() => setExpanded(!expanded)} />

      <div className={expanded ? navOpen : navClosed}>
        <Navigation />
      </div>

      <main className="app-main">

        <div className="-mx-6 md:mx-0">
          <Banner />
        </div>
        
        <Categories />
        <Orders />
      </main>

      <div className="app-side">

        <aside className="grid gap-1 grid-cols-2 mb-8" aria-label="stats">
          {stats.map(s => <Stat key={s.id} title={s.title} total={s.total} />)}
        </aside>

        <Cart />

      </div>
    </div>
  );
}
