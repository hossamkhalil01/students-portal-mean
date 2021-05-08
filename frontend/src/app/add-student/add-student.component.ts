import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  @Output() newStudent: EventEmitter<{
    name: string;
    age: number;
    email: string;
  }> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addNewStudent() {
    if (this.studentForm.valid) {
      this.newStudent.emit(this.studentForm.value);
      this.studentForm.setValue({ name: '', age: '', email: '' });
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
