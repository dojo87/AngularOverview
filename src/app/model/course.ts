import { Section } from './section';
export class Course {
  constructor(slug: string, title: string) {
    this.slug = slug;
    this.title = title;
  }
  title: string;
  slug: string;
  sections?: Section[];
}
