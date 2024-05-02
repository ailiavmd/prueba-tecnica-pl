import { categories } from '@/dummy-data/categories';
import { Category } from '../shared';

export const Categories = () => {

    return(
        <section className="mb-7">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">Categories</h3>

            <div className="">
                <div className="md:grid md:grid-cols-3 gap-1 flex overflow-x-auto">
                    {categories.map(c => 
                        <div key={c.id} className="w-40 md:w-full shrink-0">
                            <Category title={c.title} image={c.image} />
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};
