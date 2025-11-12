import studentService from "@/app/services/student/student.service";
import { create } from "zustand";
import { Students, StudentStore } from "../interfaces/types";

// que es esto?
export const useStudentStore = create<StudentStore>()((set) => ({
    students: [],
        getStudents: async (limit: number = 10, offset: number = 1) => {

            const students: Students[] = await studentService.getAll(limit, offset)
            return set((state)=> ({...state, students}))

        }
}))