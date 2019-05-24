import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-section',
  template: `
    <div>Section Mock</div>
  `,
  styleUrls: []
})
export class SectionComponent {
  @Input() section: any;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
}

export class CourseServiceMock {
  constructor() {}

  public getCourse(slug: string): Observable<Course> {
    return observableOf(new Course('slug', 'title', 'author'));
  }

  public getCourses(): Observable<Course[]> {
    return observableOf([
      new Course('slug1', 'title1', 'author1'),
      new Course('slug2', 'title2', 'author2')
    ]);
  }
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, SectionComponent],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        RouterTestingModule
      ],
      providers: [{ provide: CourseService, useValue: new CourseServiceMock() }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
