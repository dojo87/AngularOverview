import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  courses: Course[];
  coursesSubscription: Subscription; // Consequence of Approach I
  courses$: Observable<Course[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Approach I
    this.coursesSubscription = this.courseService
      .getCourses()
      .subscribe(courses => {
        this.courses = courses;
      });

    // Approach II
    this.courses$ = this.courseService.getCourses();
  }

  // Consequence of Approach I
  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }
}
