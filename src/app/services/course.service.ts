import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Section } from '../model/section';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() {}

  private courses: Course[] = [
    {
      slug: 'przyspieszony-kurs-angulara',
      title: 'Przyśpieszony kurs Angulara!!',
      author: '10min.pl',
      sections: [
        {
          header: 'Wstep',
          type: 'TEXT',
          content: 'Przyśpieszony kurs nie pozwala na zbytnie lanie wody'
        },
        this.getMockSection('Trochę rozwiniemy', 4),
        { header: 'Zakończenie', type: 'TEXT', content: 'A więc już kończymy' }
      ]
    },
    {
      slug: 'bardziej-rozwiniety-kurs-angulara',
      title: 'Trochę bardziej rozwinięty kurs Angulara...',
      author: '10min.pl',
      sections: [
        {
          header: 'Wstep',
          type: 'TEXT',
          content: 'A więc zaczęło się w roku 2010....'
        },
        ...this.getMockSections(10),
        {
          header: 'Zakończenie',
          type: 'TEXT',
          content: 'Uff dobrnęliśmy do końca, nudy jak flaki z olejem.'
        }
      ]
    }
  ];

  private getMockSections(howMany: number): Section[] {
    const sections = [];
    for (let section = 1; section <= howMany; section++) {
      sections.push(
        this.getMockSection(
          'Chapter ' + section,
          Math.round(Math.random() * 100)
        )
      );
    }

    return sections;
  }

  private getMockSection(header: string, howManyLines: number): Section {
    const content = [];
    for (let line = 0; line < howManyLines; line++) {
      content.push(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + header
      );
    }

    return new Section(header, 'TEXT', content.join());
  }

  public getCourse(slug: string): Course {
    return this.courses.find(c => c.slug === slug);
  }

  public getCourses(): Course[] {
    return this.courses.map<Course>(c => new Course(c.slug, c.title, c.author));
  }
}
