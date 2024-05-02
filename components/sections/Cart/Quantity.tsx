'use client';

import { useState } from 'react';

export const Quantity = () => {

    const [qty, setQty] = useState(1);
    const enabled = 'h-8 w-8 rounded-full bg-primary text-white text-2xl font-extralight text-center';
    const disabled = 'h-8 w-8 rounded-full bg-soft-grey text-black text-2xl font-extralight text-center';

    return(
        <div className="flex gap-4 items-center">
            <button className={ qty > 1 ? enabled : disabled } onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <strong className="text-2xl font-semibold block min-w-6 text-center">{ qty }</strong>
            <button className={ enabled } onClick={() => setQty(qty + 1)}>+</button>
        </div>
    );
};
