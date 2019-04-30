import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'course/:slug', component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
