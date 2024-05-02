export const Category = ({ title, image }: { title: string, image: string }) => {
    return(
        <a className="block relative h-32 overflow-hidden rounded-2xl" href="">
            <img src={image} alt={title + ' alt text'} className="object-cover h-full w-full" />
            <h4 className="text-white font-semibold text-sm absolute top-0 left-0 p-4 h-full w-full flex items-end bg-gradient-to-b from-transparent to-black">{title}</h4>
        </a>
    );
};
