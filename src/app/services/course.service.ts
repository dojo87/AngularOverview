import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  private api = 'http://localhost:3000/courses';

  public getCourse(slug: string): Observable<Course> {
    return this.http.get<Course>(this.api + '/' + slug);
  }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.api);
  }
}
