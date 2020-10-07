export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLength30 = (value, maxValue) => {
    if (value && value.length > 30) return 'max length 30 symbol';
    return undefined;
}