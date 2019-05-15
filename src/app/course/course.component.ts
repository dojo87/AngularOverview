import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { Section } from '../model/section';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public course: Course;

  public selectedSection: Section;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.loadCourse();
  }

  public sectionSelected(section: Section) {
    this.selectedSection = section;
    this.course.sections.forEach(s => (s.inEditMode = false));
  }

  public addSection(insertBeforeSection: Section) {
    if (insertBeforeSection) {
      const index = this.course.sections.findIndex(
        s => s === insertBeforeSection
      );
      console.log('insert before: ' + index);
      const newSection: Section = {
        header: '',
        type: 'Text',
        content: ''
      };
      this.course.sections.splice(index, 0, newSection);
      newSection.inEditMode = true;
    }
  }

  loadCourse() {
    this.route.params.subscribe(params => {
      const slug: string = params.slug;
      this.course = null;
      this.courseService.getCourse(slug).subscribe(c => (this.course = c));
    });
  }
}
