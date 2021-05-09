import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../helpers/urls';
import Student from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  readonly studentsBaseUrl: string = baseUrl + '/students';
  constructor(private client: HttpClient) {}

  getStudents(params: any): Observable<any> {
    return this.client.get(this.studentsBaseUrl, { params });
  }

  getStudent(id: String): Observable<any> {
    return this.client.get(this.studentsBaseUrl + '/' + id);
  }

  addStudent(student: Student): Observable<any> {
    return this.client.post<Student>(this.studentsBaseUrl, student);
  }

  deleteStudent(id: String): Observable<any> {
    return this.client.delete(this.studentsBaseUrl + '/' + id);
  }
  updateStudent(id: String, student: Student): Observable<any> {
    return this.client.patch<Student>(this.studentsBaseUrl + '/' + id, student);
  }
}
