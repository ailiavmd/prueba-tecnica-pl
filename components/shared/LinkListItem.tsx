export const LinkListItem = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return(
        <li className="my-4 md:my-9">
            <a className="inline-block align-middle text-center py-2 px-3 hover:bg-white-30 rounded-sm" href="" aria-label="link"  role="link">
                {children}
            </a>
        </li>
    );
};
