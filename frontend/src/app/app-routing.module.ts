import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'profile/:id', component: ProfileComponent },
  // { path: 'user-details', component: UserDetailsComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
