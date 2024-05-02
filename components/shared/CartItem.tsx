import { Star } from '../icons';
import { Quantity } from '../shared';
import { parseNumber } from '@/util';

export const CartItem = ({
    title, image, total, rating, reviews
}: {
    title: string, image:string, total: number, rating: string, reviews: number
}) => {

    const totalReviews = reviews > 1000 ? parseNumber(reviews) + '+' : reviews;

    return(
        <div className="bg-white rounded-2xl p-3 flex gap-3">

            <div className="relative w-28 h-24 shrink-0 object-cover">
                <img src={image} className="rounded-2xl object-cover w-full h-full" alt={title + ' alt text'} />
            </div>

            <div className="w-full flex flex-col">
                <h5 className="font-medium mb-1">{title}</h5>
                <p className="mt-0 mb-2 font-medium text-xs">
                    <Star /> {rating} <span className="text-base-grey">({totalReviews} reviews)</span>
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <strong>${total}</strong>
                    <Quantity />
                </div>
            </div>

        </div>
    );
};
