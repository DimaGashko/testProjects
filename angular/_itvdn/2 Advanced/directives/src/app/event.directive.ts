import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvent]'
})
export class EventDirective {
  colors: string[] = ['#000', '#fff', 'red', 'blue', 'green', 'yellow', 'pink'];
  curColorIndex: number = 0;

  get curColor():string {
    return this.colors[this.curColorIndex];
  }

  get el(): any {
    return this.elementRef.nativeElement;
  }

  @HostListener('click') onclick() {
    this.updateColor();
  }

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.updateColor();
  }

  updateColor() {
    this.renderer.setStyle(this.el, 'color', this.curColor);
    this.updateCurColor();
  }

  updateCurColor() {
    this.curColorIndex = (this.curColorIndex + 1) % this.colors.length;
  }

}
