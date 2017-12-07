import {Registration} from "./Registration"
export interface Student {
    id: number;
    name:string;
    registrations: Array<Registration>;

}