import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalBr'
})
export class DecimalBrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value === 0) { return 0; }
    let x, x1, x2, rgx;
    let valueStr: string = value.toString();
    x = valueStr.split('.');
    x1 = x[0];
    x2 = x1 ? x[1] : '';
    rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + (x2 ? `,${x2}` : '');
  }

}
