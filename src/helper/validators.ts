type Validator = (str: string) => boolean;

export const validPassword: Validator = (str) => str.length < 5 ? false : true;

export const validMail: Validator = (str) => (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(str)