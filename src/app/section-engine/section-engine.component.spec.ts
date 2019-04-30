import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEngineComponent } from './section-engine.component';

describe('SectionEngineComponent', () => {
  let component: SectionEngineComponent;
  let fixture: ComponentFixture<SectionEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
