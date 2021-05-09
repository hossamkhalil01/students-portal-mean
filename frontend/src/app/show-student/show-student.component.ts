import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Student from '../models/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css'],
})
export class ShowStudentComponent implements OnInit {
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

  student: Student = { _id: '', name: '', email: '', age: 0 };
  subscriber: any;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) {}

  ngOnDestroy(): void {
    if (this.subscriber) this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    // get id
    const id = this.route.snapshot.params['id'];

    // get the user object
    this.subscriber = this.studentsService
      .getStudent(id)
      .subscribe((res: { data: Student }) => {
        if (!res.data) this.router.navigate(['404']);
        this.student = res.data;
        this.loadFormData();
      });
  }

  handleEdit(): any {
    // handle save
    if (this.isEdit) {
      if (!this.studentForm.valid) {
        //reset form
        this.loadFormData();
      } else {
        this.subscriber = this.studentsService
          .updateStudent(this.student._id, this.studentForm.value)
          .subscribe((res) => {
            this.student = res.data;
          });
      }
    }
    this.isEdit = !this.isEdit;
  }

  deleteUser(): void {
    this.subscriber = this.studentsService
      .deleteStudent(this.student._id)
      .subscribe((res) => {
        this.router.navigate(['home']);
      });
  }

  loadFormData() {
    this.studentForm.controls.name.setValue(this.student.name);
    this.studentForm.controls.age.setValue(this.student.age);
    this.studentForm.controls.email.setValue(this.student.email);
  }

  updateStudent() {
    console.log(this.studentForm);
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
