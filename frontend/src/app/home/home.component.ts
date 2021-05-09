import { Component, OnInit } from '@angular/core';
import Student from '../models/student';
import { StudentsService } from '../services/students.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  students: Array<Student> = [];
  searchKey: String = '';
  subscriber: any;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.loadStudentsList();
  }

  ngOnDestroy(): void {
    if (this.subscriber) this.subscriber.unsubscribe();
  }

  loadStudentsList() {
    // get the updated list
    this.subscriber = this.studentsService
      .getStudents({ params: this.searchKey })
      .subscribe((res) => (this.students = res.data));
  }

  handleNewStudent(newStudent: Student) {
    this.loadStudentsList();
  }
}
