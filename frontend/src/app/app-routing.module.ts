import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowStudentComponent } from './show-student/show-student.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students/:id', component: ShowStudentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
