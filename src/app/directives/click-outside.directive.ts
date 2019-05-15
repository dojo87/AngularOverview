import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() appClickOutside: EventEmitter<any> = new EventEmitter<any>();
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.appClickOutside.emit(targetElement);
    }
  }
}
