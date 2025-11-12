'use client'
import { useStudentStore } from "@/app/_store/student/store/student.store";
import { Students } from "@/app/interfaces/students-response.interface";
import studentService from "@/app/services/student/student.service";
import { AppDispatch, useAppSelector } from "@/app/store";
import { getStudentAction } from "@/app/store/actions/StudentsActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function MainPage() {
  //const [students, setStudents] = useState<Students[]>([])

  // redux
  const dispatch = useDispatch<AppDispatch>()
  const studentsSelector:Students[] = useAppSelector(state=> state.student.data)

  // zustand
  const {students, getStudents} = useStudentStore()
  
  useEffect(()=>{
    getStudents(10, 1)
  }, [getStudents])
  
  useEffect(()=> {
    dispatch(getStudentAction())
  }, [])


 /*  useEffect(() => {
    const fetchStudents: any = async () => {
      try {
        const data = await studentService.getAll()
        setStudents(data)
      } catch (error) {

      }
    }
    fetchStudents()
    console.log("🚀 ~ MainPage ~ fetchStudents:", fetchStudents)
  }, []) */
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">

        <div className="col-span-12">

          <div className="overflow-auto lg:overflow-visible">

            <table className="table text-gray-400 border-separate space-y-6 text-sm">

              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th>nombre</th>
                  <th>edad</th>
                  <th>email</th>
                  <th>genero</th>
                  <th>nickname</th>
                  <th>materias favoritas</th>


                </tr>
              </thead>

              <tbody>

                {
                  // students ? students.map(student => (
                  // redux studentsSelector ? studentsSelector.map(student => (
                  // zustand
                  students ? students.map(student => (
                    <tr className="bg-gray-300 text-black" key={student.id}>
                      <td className="p-3 ">

                        {student.name}

                      </td>
                      <td className="p-3 ">{student.age}</td>
                      <td className="p-3 ">{student.email}</td>
                      <td className="p-3 ">{student.gender}</td>
                      <td className="p-3 ">{student.nickname}</td>
                      <td className="p-3 ">{(student.subjects).join(',')}</td>

                    </tr>
                  )) : ''
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
}