import { Notifications } from '../../icons';
import { cart } from '@/dummy-data/cart';
import { CartItem } from './CartItem';

export const Cart = () => {

    return(
        <aside className="mb-7" aria-label="cart-items">

            <div className="flex justify-between items-start gap-2">
                <div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2">My Cart</h3>
                    <p className="text-xs md:text-base">Shopping is happy</p>
                </div>

                <Notifications width={23} classes="fill-soft-grey" />
            </div>
            
            <ul className="mt-5 grid gap-4">
                {cart.map(it => <li key={it.id}>
                    <CartItem title={it.title} image={it.image} total={it.total} rating={it.rating} reviews={it.reviews} />
                </li>)}
            </ul>
        </aside>
    );
};
