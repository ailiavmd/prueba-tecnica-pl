export const List = ({ classes, width }: { classes?: string, width?: number }) => {
    return(
        <svg style={{ width: width ? `${width}px` : '18px' }} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M5 14c.283 0 .52-.096.713-.287A.968.968 0 0 0 6 13a.968.968 0 0 0-.287-.713A.967.967 0 0 0 5 12a.967.967 0 0 0-.713.287A.968.968 0 0 0 4 13c0 .283.096.52.287.713.192.191.43.287.713.287Zm0-4c.283 0 .52-.096.713-.287A.968.968 0 0 0 6 9a.968.968 0 0 0-.287-.713A.968.968 0 0 0 5 8a.968.968 0 0 0-.713.287A.968.968 0 0 0 4 9c0 .283.096.52.287.713.192.191.43.287.713.287Zm0-4c.283 0 .52-.096.713-.287A.968.968 0 0 0 6 5a.968.968 0 0 0-.287-.713A.968.968 0 0 0 5 4a.968.968 0 0 0-.713.287A.968.968 0 0 0 4 5c0 .283.096.52.287.713.192.191.43.287.713.287Zm3 8h6v-2H8v2Zm0-4h6V8H8v2Zm0-4h6V4H8v2ZM2 18c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 16V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h14c.55 0 1.02.196 1.413.588C17.803.979 18 1.45 18 2v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 16 18H2Z" className={classes || 'fill-white'} /></svg>
    );
};
