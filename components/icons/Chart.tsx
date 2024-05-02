export const Chart = ({ classes, width }: { classes?: string, width?: number }) => {
    return(
        <svg style={{ width: width ? `${width}px` : '18px' }} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"><path d="M0 18v-2h20v2H0Zm1-3V8h3v7H1Zm5 0V3h3v12H6Zm5 0V6h3v9h-3Zm5 0V0h3v15h-3Z" className={classes || 'fill-white'} /></svg>
    );
};
