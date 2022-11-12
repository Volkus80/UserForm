import monthes from '../data/monthes';
import normalizeNum from '../helper/normalizeNum';
type Validator = (str: string) => boolean;
type Time = () => ({day: string, time: string});

export const validPassword: Validator = (str) => str.length < 5 ? false : true;

export const validMail: Validator = (str) => (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(str);

export const timeOfLastChanges: Time = () => {
    const now = new Date();
    const day = String(now.getDate()) +' ' + monthes[now.getMonth()] + ' ' + String(now.getFullYear());
    const time = String(now.getHours()) + ':' + normalizeNum(String(now.getMinutes())) + ':' + normalizeNum(String(now.getSeconds()));
    return {day, time};
}