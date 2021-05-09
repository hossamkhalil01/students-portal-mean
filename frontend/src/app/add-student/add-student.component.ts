import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import Student from '../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(13),
      Validators.max(30),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Output() newStudent: EventEmitter<Student> = new EventEmitter();

  subscriber: any;

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {}

  addNewStudent() {
    if (this.studentForm.valid) {
      this.subscriber = this.studentsService
        .addStudent(this.studentForm.value)
        .subscribe((res) => this.newStudent.emit(res.data));

      this.studentForm.reset();

      // redirect to home
      this.router.navigate(['home']);
    }
  }

  get isNameValid() {
    return this.studentForm.controls.name.valid;
  }
  get isAgeValid() {
    return this.studentForm.controls.age.valid;
  }
  get isEmailValid() {
    return this.studentForm.controls.email.valid;
  }

  get isFormValid() {
    return this.studentForm.valid;
  }

  get isFormDirty() {
    return this.studentForm.dirty;
  }
  get isNameDirty() {
    return this.studentForm.controls.name.dirty;
  }
  get isAgeDirty() {
    return this.studentForm.controls.age.dirty;
  }
  get isEmailDirty() {
    return this.studentForm.controls.email.dirty;
  }
}
