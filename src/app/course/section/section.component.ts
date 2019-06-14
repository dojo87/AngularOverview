import { Component, OnInit, Input, Output } from '@angular/core';
import { Section } from '../../model/section';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  @Output() selected: EventEmitter<Section> = new EventEmitter<Section>();

  constructor() {}

  public sectionSelected() {
    this.selected.emit(this.section);
  }

  public saveSection(section: Section) {
    console.log(`[${this.section.type}] ${this.section.header} added`);
    this.section.header = section.header;
    this.section.type = section.type;
    this.section.content = section.content;
    this.section.inEditMode = false;
  }
  ngOnInit() {}
}
