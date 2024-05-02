'use client';

import { useState } from 'react';
import { Order } from '../shared';

import { orders1 } from '@/dummy-data/orders-1';
import { orders2 } from '@/dummy-data/orders-2';
import { orders3 } from '@/dummy-data/orders-3';

export const Orders = () => {

    const [active, setActive] = useState('ordered');
    const btn = 'font-medium text-base-grey text-lg md:text-xl px-2 md:px-3 pt-2 pb-1 hover:text-black';
    const btnActive = 'font-medium text-black text-lg md:text-xl px-2 md:px-3 pt-2 pb-1 border-b-2 border-black';

    return(
        <section className="mb-8">
            
            <ul className="flex gap-3 md:gap-8 mb-4">
                <li>
                    <button className={active === 'ordered' ? btnActive : btn}
                    onClick={() => setActive('ordered')}>Ordered</button>
                </li>
                <li>
                    <button className={active === 'delivered' ? btnActive : btn}
                    onClick={() => setActive('delivered')}>Delivered</button>
                </li>
                <li>
                    <button className={active === 'finished' ? btnActive : btn}
                    onClick={() => setActive('finished')}>Finished</button>
                </li>
            </ul>

            <div className={ active === 'ordered' ? 'block' : 'hidden'}>
                <ul className="grid gap-2">
                    {orders1.map(o => <li key={o.id}><Order title={o.title} date={o.date} image={o.image}/></li>)}
                </ul>
            </div>

            <div className={ active === 'delivered' ? 'block' : 'hidden'}>
                <ul className="grid gap-2">
                    {orders2.map(o => <li key={o.id}><Order title={o.title} date={o.date} image={o.image}/></li>)}
                </ul>
            </div>

            <div className={ active === 'finished' ? 'block' : 'hidden'}>
                <ul className="grid gap-2">
                    {orders3.map(o => <li key={o.id}><Order title={o.title} date={o.date} image={o.image}/></li>)}
                </ul>
            </div>

        </section>
    );
};
