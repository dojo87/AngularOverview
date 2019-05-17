import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  courses: Course[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}
