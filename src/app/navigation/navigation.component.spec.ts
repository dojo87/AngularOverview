import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { Component, Injectable } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavigationComponent } from './navigation.component';

import { of as observableOf, Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-main-page',
  template: `
    <div>MainPage Mock</div>
  `,
  styleUrls: []
})
export class MainPageComponent {}

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

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, MainPageComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        AppRoutingModule
      ],
      providers: [{ provide: CourseService, useValue: new CourseServiceMock() }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu', done => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    fixture.whenStable().then(() => {
      const allLinks = compiled.querySelectorAll('a');
      expect(allLinks.length).toEqual(2);
      expect(allLinks[0].textContent).toContain('title1');
      expect(allLinks[1].textContent).toContain('title2');
      done();
    });
  });
});
