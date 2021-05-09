import { Component, Input, OnInit } from '@angular/core';
import Student from '../models/student';

@Component({
  selector: 'display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css'],
})
export class DisplayStudentsComponent implements OnInit {
  @Input() studentsList: Array<Student> = [];

  searchKey: string = '';

  constructor() {}

  ngOnInit(): void {}

  showStudent(student: Student) {
    // this.updatedTodo.emit(todo);
  }
}
