import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appPrefix]'
})
export class PrefixDirective {
  private _prefix: string = '(Default)';

  @Input('appPrefix') set prefix(prefix: string) {
    this._prefix = `(${prefix})`;
    this.updatePrefix();
  }

  get prefix() {
    return this._prefix;
  }

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.updatePrefix();
  }

  updatePrefix() {
    this.el.innerText = `${this.prefix} ${this.el.innerText}`;
  }

  get el(): HTMLElement {
    return this.elementRef.nativeElement;
  }

}
