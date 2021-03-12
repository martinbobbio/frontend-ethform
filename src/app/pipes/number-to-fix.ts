import { Pipe, PipeTransform } from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | numberToFix:exponent
 * Example:
 *   {{ 2 | numberToFix:10 }}
 *   formats to: 1024
*/
@Pipe({
  name: 'numberToFix'
})
export class NumberToFix implements PipeTransform {

  transform(value: number, fix?: number): number {

    return Number(value.toFixed(fix))
  }

}
