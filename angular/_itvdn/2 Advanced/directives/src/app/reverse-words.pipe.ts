import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseWords'
})
export class ReverseWordsPipe implements PipeTransform {

  transform(value: string): string {
    return ('' + value).replace(/[\S]+/g, (word: string): string => { 
      return word.split('').reverse().join('');
    })
  }

}
