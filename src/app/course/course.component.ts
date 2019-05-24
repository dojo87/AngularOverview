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
    this.course.sections.forEach(s => (s.inEditMode = false));
    section.inEditMode = true;
  }

  public insertSection(section: Section | null) {
    const newSection = new Section('', 'TEXT', '');

    if (section) {
      const insertAfterIndex = this.course.sections.indexOf(section);
      this.course.sections.splice(insertAfterIndex, 0, newSection);
    } else {
      this.course.sections.push(newSection);
    }

    this.onSectionSelected(newSection);
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
