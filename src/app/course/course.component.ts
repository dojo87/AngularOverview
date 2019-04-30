import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public course$: Observable<Course>;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.loadCourse();
  }

  public sectionSelected(event: any) {
    alert(event);
  }

  loadCourse() {
    this.route.params.subscribe(params => {
      const slug: string = params.slug;
      this.course$ = this.courseService.getCourse(slug);
    });
  }
}
