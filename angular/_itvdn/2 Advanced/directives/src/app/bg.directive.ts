import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBg]',

})
export class BgDirective {
  get el(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  @Input('appBg') set bg(bg: string) {
    this.renderer.setStyle(this.el, 'background', bg);
  }

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { 

  }

}
