import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() {}

  private COURSES: Course[] = [
    {
      slug: 'przyspieszony-kurs-angulara',
      title: 'Baaardzo przyśpieszony kurs Angulara',
      sections: [
        {
          header: 'wstep',
          type: 'Text',
          content:
            'Przyśpieszony kurs nie pozwala na wstępy, więc przejdźmy do nauki.'
        },
        {
          header: 'zakonczenie',
          type: 'Text',
          content: 'Z racji krótkiego czasu na kurs musimy w zasadzie kończyć.'
        }
      ]
    },
    {
      slug: 'spowolniony-kurs-angulara',
      title: 'Wolny kurs Angulara',
      sections: [
        {
          header: 'wstep',
          type: 'Text',
          content:
            'A więc zacznijmy od historii Angulara. A więc w roku 2010...'
        },
        {
          header: 'logo',
          type: 'Image',
          content: {
            url: 'https://angularjs.org/img/AngularJS-large.png',
            alt: 'Oto Logo Angulara JS'
          }
        }
      ]
    }
  ];

  getCourse(slug: string): Observable<Course> {
    return observableOf(this.COURSES.find(c => c.slug === slug));
  }

  getCourses(): Observable<Course[]> {
    return observableOf(this.COURSES.map(c => new Course(c.slug, c.title)));
  }
}
