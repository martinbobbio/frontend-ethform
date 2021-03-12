import { Pipe, PipeTransform } from '@angular/core';

/*
 * Parses the value indicated by the parameter in decimal
 * Usage:
 *   value | numberToFix:exponent
 * Example:
 *   {{ 22121.23311 | numberToFix:2 }}
 *   formats to: 22121.23
*/
@Pipe({
  name: 'numberToFix'
})
export class NumberToFix implements PipeTransform {

  transform(value: number = 0, fix: number = 3): number {

    return Number(value.toFixed(fix))
  }

}
