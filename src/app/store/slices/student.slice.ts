import { Grade } from "@/app/interfaces/students-response.interface";
import { createSlice } from "@reduxjs/toolkit";

export type Students = {
    id: number;
    name: string;
    age: number;
    gender: string;
    nickname: string;
    subjects: string[];
    grade: Grade[];
}
// el slice me permite definir la data con la cual se va a poblar ese estado.
export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    // aqui podriamos tener el control del login
    // que mas??
    reducers: {
        startFetchingStudents: (state) => {
            state.loading = true
            state.error = null
        },
        setStudentsData: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchingDataFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { startFetchingStudents, setStudentsData, fetchingDataFailure} = studentSlice.actions
// poder cambiar los estados de una manera dinamica ??
export const studentReducer = studentSlice.reducer