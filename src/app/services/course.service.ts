import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  private api = 'http://localhost:3000/courses';

  public getCourse(slug: string): Observable<Course> {
    return this.http.get<Course>(this.api + '/' + slug).pipe(
      catchError(e => {
        console.log(`Error on getCourse(${slug}): ${e.message}`);
        return throwError(new Error('Cant get that course...'));
      })
    );
  }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.api).pipe(
      catchError(e => {
        console.log('Error on getCourses: ' + e.message);
        return throwError(new Error('Cant get them courses...'));
      })
    );
  }
}
