import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.css']
})
export class SectionEditComponent implements OnInit {
  @Input() section: Section;
  @Output() sectionSaved: EventEmitter<Section> = new EventEmitter<Section>();

  sectionForm = this.fb.group({
    header: [
      null,
      Validators.compose([Validators.required, Validators.maxLength(50)])
    ],
    content: [null, Validators.required],
    type: [{ label: 'Image', id: 'IMAGE' }, Validators.required]
  });

  types = [{ label: 'Image', id: 'IMAGE' }, { label: 'Text', id: 'TEXT' }];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.section) {
      this.sectionForm.patchValue(this.section);
    }
  }

  onSubmit() {
    const submitValue = this.sectionForm.getRawValue();
    this.sectionSaved.emit(submitValue);
  }
}
