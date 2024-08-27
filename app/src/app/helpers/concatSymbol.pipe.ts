import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appConcatSymbol',
})
export class ConcatSymbolPipe implements PipeTransform {

  typeValue: string = '';

  transform(value1: any, value2: any): string {
    if (!value1 && !value2) {
      return `${value1} ${value2}`;
    }
    if (!value1) {
      return `${value1} ${value2}`;
    }
    if (!value2) {
      return `${value1} ${value2}`;
    } else {
      return `${value1} ${value2}`;
    }
  }
}
