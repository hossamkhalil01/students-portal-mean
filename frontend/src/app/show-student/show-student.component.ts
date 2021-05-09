import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Student from '../models/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css'],
})
export class ShowStudentComponent implements OnInit {
  student: Student = { _id: '', name: '', email: '', age: 0 };
  subscriber: any;

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
      });
  }

  deleteUser(): void {
    this.subscriber = this.studentsService
      .deleteStudent(this.student._id)
      .subscribe((res) => {
        this.router.navigate(['home']);
      });
  }
}
