import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { Section } from '../model/section';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-engine',
  templateUrl: './section-engine.component.html',
  styleUrls: ['./section-engine.component.scss']
})
export class SectionEngineComponent implements OnInit {
  @Input() section: Section;
  @Output() hasBeenSelected = new EventEmitter<Section>();

  constructor(private fb: FormBuilder) {}

  public sectionForm = this.fb.group({
    header: [null, Validators.required],
    content: [null, Validators.required]
  });

  public edit() {
    this.hasBeenSelected.emit(this.section);
    this.section.inEditMode = true;
  }

  public saveSection() {
    if (this.section && this.section.inEditMode === true) {
      const section = this.sectionForm.value as Section;
      Object.assign(this.section, section);
      this.section.inEditMode = false;
    }
  }

  ngOnInit() {
    this.sectionForm.patchValue(this.section);
  }
}
