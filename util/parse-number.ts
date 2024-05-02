export const parseNumber = (num: number): string => {
    if (num > 1000) return Math.round(num / 1000) + 'k';
    return num.toString();
};
