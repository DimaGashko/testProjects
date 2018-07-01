import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) { 
    renderer.setStyle(elementRef.nativeElement, 'background', 'rgba(0,255,0,.5');
  }

}
