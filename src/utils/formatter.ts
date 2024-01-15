import moment from "moment";

export function relativeDateFormatter(date: string) {
    return moment(date).add(10, 'days').calendar();
}