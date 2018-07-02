import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[addDelay]'
})
export class AddIntervalDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('addDelay') set start(val: string) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, +val);
  }

}
