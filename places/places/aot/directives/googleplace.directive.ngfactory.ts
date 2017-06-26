/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../directives/googleplace.directive';
import * as import1 from '@angular/core/src/linker/view';
export class Wrapper_GoogleplaceDirective {
  /*private*/ _eventHandler:Function;
  context:import0.GoogleplaceDirective;
  /*private*/ _changed:boolean;
  subscription0:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.GoogleplaceDirective(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'input')) {
      const pd_sub_0:any = ((<any>this.context.onInputChange()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.setAddress.subscribe(_eventHandler.bind(view,'setAddress'))); }
  }
}