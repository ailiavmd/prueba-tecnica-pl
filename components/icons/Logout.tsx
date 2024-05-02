export const Logout = ({ fill, width }: { fill?: string, width?: number }) => {
    return(
        <svg style={{ width: width ? `${width}px` : '28px' }} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M3.111 28a2.996 2.996 0 0 1-2.197-.914A2.996 2.996 0 0 1 0 24.89V3.11C0 2.256.305 1.523.914.914A2.996 2.996 0 0 1 3.11 0H14v3.111H3.111V24.89H14V28H3.111Zm17.111-6.222-2.139-2.256 3.967-3.966H9.333v-3.112H22.05l-3.967-3.966 2.14-2.256L28 14l-7.778 7.778Z" fill={fill || '#fff'} /></svg>
    );
};
