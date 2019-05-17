import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Subscription } from 'rxjs';
import { Section } from '../model/section';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {
  course: Course;

  private subSink: Subscription[] = [];
  public selectedSection: Section;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  public onSectionSelected(section: Section) {
    this.selectedSection = section;
  }

  ngOnInit() {
    this.subSink.push(
      this.route.params.subscribe(
        params => {
          const slug: string = params.slug;
          this.course = null;
          this.subSink.push(
            this.courseService.getCourse(slug).subscribe(c => (this.course = c))
          );
        },
        err => alert(err.message)
      )
    );
  }

  ngOnDestroy(): void {
    this.subSink.forEach(s => s.unsubscribe());
  }
}
