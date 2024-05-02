import { Chart, Dinning, Grid, List, Logout, Notifications, Settings, Stockpot } from '../../icons';
import { LinkListItem } from './LinkListItem';

export const Navigation = () => {

    return(
        <nav className="rounded-3xl flex flex-col items-center py-8 px-6 bg-gradient-to-b from-orange to-yellow md:min-h-screen">

            <Dinning classes="fill-white" />

            <ul className="mt-7 mb-auto text-center">
                <LinkListItem>
                    <Stockpot classes="fill-white" />
                </LinkListItem>
                <LinkListItem>
                    <List classes="fill-white" />
                </LinkListItem>
                <LinkListItem>
                    <Chart classes="fill-white" />
                </LinkListItem>
                <LinkListItem>
                    <Grid classes="fill-white" />
                </LinkListItem>
                <LinkListItem>
                    <Notifications classes="fill-white" />
                </LinkListItem>
                <LinkListItem>
                    <Settings classes="fill-white" />
                </LinkListItem>
            </ul>

            <div className="md:mb-9 md:pb-9">
                <Logout />
            </div>
        </nav>
    );
};
