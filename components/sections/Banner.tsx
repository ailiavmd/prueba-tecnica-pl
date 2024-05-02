export const Banner = () => {
    return(
        <section className="mb-5 bg-light-orange md:rounded-2xl text-dark p-9 relative overflow-hidden">
            <h2 className="font-semibold text-5xl leading-none mb-2">Discount <br />New Menu!</h2>
            <p className="m-0 w-56 md:w-72">Get Free Shipping Every $30 With No Minimum Purchase</p>
            
            <img className="absolute object-contain h-full -right-1/2 min-[400px]:-right-32 min-[550px]:right-0 top-0" src="/images/salad.png" alt="Healthy salad" />

        </section>
    );
};
