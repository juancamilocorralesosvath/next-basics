import { Students } from "@/app/interfaces/students-response.interface";
import apiService from "../api.service";

const studentService = {
    getAll: async(limit:number=10, offset:number=10) => {
        const students = await apiService.get<Students[]>(`students?${limit}=4&${offset}=1`)
        return students
    }
}

export default studentService