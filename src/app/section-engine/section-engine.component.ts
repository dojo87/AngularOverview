import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../model/section';

@Component({
  selector: 'app-section-engine',
  templateUrl: './section-engine.component.html',
  styleUrls: ['./section-engine.component.scss']
})
export class SectionEngineComponent implements OnInit {
  @Input() section: Section;

  @Output() hasBeenSelected = new EventEmitter<any>();

  public selected() {
    console.log(`Selected :  ${this.section.header}`);
    this.hasBeenSelected.emit(this.section);
  }
  constructor() {}

  ngOnInit() {}
}
