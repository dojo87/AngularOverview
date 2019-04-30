import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-engine',
  templateUrl: './section-engine.component.html',
  styleUrls: ['./section-engine.component.scss']
})
export class SectionEngineComponent implements OnInit {
  @Input() type: string;
  @Input() header: string;
  @Input() content: any;

  @Output() hasBeenSelected = new EventEmitter<any>();

  public selected() {
    console.log(this.header);
    this.hasBeenSelected.emit(this.header);
  }
  constructor() {}

  ngOnInit() {}
}
