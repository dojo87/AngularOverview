import { Section } from './section';

export class Course {
  constructor(
    public slug: string,
    public title: string,
    public author: string
  ) {}

  sections?: Section[];
}
