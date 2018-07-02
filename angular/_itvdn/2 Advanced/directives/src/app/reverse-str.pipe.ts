import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr',
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value !== 'string') {
      console.warn('Value have to be string');
    }
    
    return Array.from(value).reverse().join('');
  }

}
