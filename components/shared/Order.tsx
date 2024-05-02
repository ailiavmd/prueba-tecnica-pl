export const Order = ({ title, date, image }: { title: string, date: string, image: string }) => {
    return(
        <div className="bg-white rounded-2xl p-3 flex gap-3 md:gap-6">

            <div className="relative w-28 h-28 md:w-24 md:h-24 shrink-0">
                <img src={image} className="rounded-2xl object-cover h-full w-full" alt={title + ' alt text'} />
            </div>

            <div className="flex flex-col md:flex-row w-full">
                <div>
                    <h5 className="font-medium md:text-xl mb-1 md:mb-3">{title}</h5>
                    <p className="m-0 font-medium text-xs md:text-xl text-base-grey">{date}</p>
                </div>
                
                <div className="mt-auto md:ml-auto">
                    <button className="bg-light-orange rounded-full text-dark md:font-medium px-11 md:px-7 py-3 md:py-4 text-sm md:text-base">
                        Order again
                    </button>
                </div>
            </div>

        </div>
    );
};
