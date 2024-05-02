export const Grid = ({ classes, width }: { classes?: string, width?: number }) => {
    return(
        <svg style={{ width: width ? `${width}px` : '18px' }} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M0 8V0h8v8H0Zm0 10v-8h8v8H0ZM10 8V0h8v8h-8Zm0 10v-8h8v8h-8Z" className={classes || 'fill-white'} /></svg>
    );
};
