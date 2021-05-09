import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from '../models/student';

@Component({
  selector: 'display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css'],
})
export class DisplayStudentsComponent implements OnInit {
  @Input() studentsList: Array<Student> = [];

  searchKey: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showStudent(student: Student) {
    this.router.navigate([`students/${student._id}`]);
  }
}
