import { Dashboard, Search } from '../icons';

export const Header = ({ toggle }: { toggle: () => void }) => {
    return(
        <header className="app-header flex justify-between items-center gap-4 mb-6 md:mb-0">
            
            <div>
                <h1 className="text-xl md:text-4xl bg-dark py-1 px-2 inline-block rounded-md">
                    <span className="font-bold text-primary">Food</span><span className="font-bold text-secondary">Health</span>
                </h1>
                <p className="text-xs md:text-xl">What do you want to eat today?</p>
            </div>
            
            <search className="lg:w-2/5 xl:w-3/5 hidden md:block">
                <form>
                    <div className="relative">
                        <label id="search-input" hidden>Search</label>
                        <input type="text" className="py-4 px-8 rounded-full w-full" placeholder="Search" aria-labelledby="search-input" />
                        <button className="absolute top-4 right-5">
                            <span className="sr-only">Submit</span>
                            <Search classes="fill-soft-grey" />
                        </button>
                    </div>
                </form>
            </search>

            <button className="md:hidden" onClick={toggle}>
                <Dashboard />
            </button>

        </header>
    );
};
