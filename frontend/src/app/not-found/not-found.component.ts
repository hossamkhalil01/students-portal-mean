import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}

  backToHome() {
    this.route.navigate(['home']); // navigate to home
  }
}
