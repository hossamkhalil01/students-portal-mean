import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from './services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowStudentComponent } from './show-student/show-student.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddStudentComponent,
    DisplayStudentsComponent,
    SearchComponent,
    ShowStudentComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
