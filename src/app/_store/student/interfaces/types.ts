import { Grade } from "@/app/interfaces/students-response.interface";

export type Students = {
    id: string;
    name: string;
    age: number;
    email: string;
    subjects: string[];
    gender: string;
    nickname: string;
    grade: Grade[]
}

export type StudentStore = {
    students: Array<Students>
    getStudents: (limit:number, offset:number) => Promise<void>
}

export type StoreSet = (
    partial: StudentStore | Partial<StudentStore> | ((state:StudentStore)=> StudentStore | Partial<StudentStore>),
    replace?: boolean | undefined) => void;
