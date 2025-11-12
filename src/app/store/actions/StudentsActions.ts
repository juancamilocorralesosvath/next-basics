import studentService from "@/app/services/student/student.service"
import { fetchingDataFailure, setStudentsData, startFetchingStudents } from "../slices/student.slice"
import { Students } from "@/app/interfaces/students-response.interface"

// accion con los tres estados
export const getStudentAction = (limit:number=10, offset:number=10) => async (dispatch:any) => {
    dispatch(startFetchingStudents())
    try {
        const data:Students[] = await studentService.getAll(limit, offset)
        if (!data) {
            throw new Error("error fetching students data")
        }
        dispatch(setStudentsData(data))
    } catch (error) {
        dispatch(fetchingDataFailure(error))
    }
}