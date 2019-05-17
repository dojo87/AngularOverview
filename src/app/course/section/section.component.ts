import { Component, OnInit, Input, Output } from '@angular/core';
import { Section } from 'src/app/model/section';
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
  ngOnInit() {}
}
