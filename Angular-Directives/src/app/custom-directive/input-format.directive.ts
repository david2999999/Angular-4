import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @HostListener('focus') onFocus() {
  //   console.log('on focus');
  // }

  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    if (this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }



}
