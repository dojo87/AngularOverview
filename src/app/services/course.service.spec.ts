import { TestBed } from '@angular/core/testing';
import { of as observableOf, throwError } from 'rxjs';

import { CourseService } from './course.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('CourseService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });

  it('should call get on API', () => {
    const service: CourseService = TestBed.get(CourseService);

    httpClientSpy.get.and.returnValue(
      observableOf([{ title: 'Course', slug: 'course', author: 'author' }])
    );

    service.getCourses().subscribe(c => {
      expect(c.length).toBe(1);
      expect(c[0].slug).toBe('course');
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should return empty list on error', done => {
    const service: CourseService = TestBed.get(CourseService);

    httpClientSpy.get.and.returnValue(
      throwError(
        new HttpErrorResponse({
          error: 'Some error',
          status: 500,
          statusText: 'Internal Error'
        })
      )
    );

    service.getCourses().subscribe(courses => {
      expect(courses).toBeDefined();
      expect(courses.length).toBe(0);
      done();
    });
  });
});
