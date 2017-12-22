import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // Sempre que essa propriedade mudar, vai rodar esse método
  // Ainda é uma propriedade.
  @Input() set appUnless(condition: boolean) { 
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  //vc de viewContainer
  //templateRef da acesso a uma template (ng-template)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 

   }

}
