export const limitStringLength = (str: string) => {
    if (str?.length > 18) {
        return str.substring(0, 18) + '...';
    } else {
        return str;
    }
};
