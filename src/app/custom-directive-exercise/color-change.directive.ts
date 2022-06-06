import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  @Input('appColorChange') set color(newColor: string){
    this.elementRef.nativeElement.style.color = newColor;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}

}
