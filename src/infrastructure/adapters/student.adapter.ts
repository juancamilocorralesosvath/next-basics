import { HttpClient } from "../http-client";

export class StudentAdapter {
    constructor(private readonly httpClient: HttpClient) {}

    async getAllStudents(){
        try {
            const students = await this.httpClient.get('http://localhost:9000/api/students?limit=4&offset=1')
            return students
        } catch (error) {
            console.log("🚀 ~ StudentAdapter ~ getAllStudents ~ error:", error)
            
        }
    }
}