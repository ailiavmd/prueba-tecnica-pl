export const Stockpot = ({ classes, width }: { classes?: string, width?: number }) => {
    return(
        <svg style={{ width: width ? `${width}px` : '18px' }} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><path d="M3 17a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 0 14V5h18v9c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 15 17H3ZM0 4V2h6V1c0-.283.096-.52.287-.713A.968.968 0 0 1 7 0h4c.283 0 .52.096.713.287.191.192.287.43.287.713v1h6v2H0Z" className={classes || 'fill-white'} /></svg>
    );
};
