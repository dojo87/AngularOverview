import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { Course } from '../model/course';
import { ConfigService } from './config.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private configService: ConfigService, private http: HttpClient) {}

  getCourse(slug: string): Observable<Course> {
    return this.http
      .get<Course>(this.configService.config.api.courses + '/' + slug)
      .pipe(
        catchError(err => {
          console.log(err);
          return observableOf(null);
        })
      );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.configService.config.api.courses).pipe(
      catchError(err => {
        console.log(err);
        return observableOf([]);
      })
    );
  }
}
