import {Course} from "./Course"
export interface Registration {
    semister: string;
    courses: Array<Course>;
}