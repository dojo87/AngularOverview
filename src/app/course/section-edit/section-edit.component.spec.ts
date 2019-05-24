import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SectionEditComponent } from './section-edit.component';

describe('SectionEditComponent', () => {
  let component: SectionEditComponent;
  let fixture: ComponentFixture<SectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEditComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatButtonToggleModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
