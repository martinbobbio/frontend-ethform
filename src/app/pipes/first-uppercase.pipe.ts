import { Pipe, PipeTransform } from '@angular/core';


/*
 * Transform the first letter in appercase
 * Usage:
 *   value | firstUppercase
 * Example:
 *   {{ martin | firstUppercase }}
 *   formats to: Martin
*/
@Pipe({
  name: 'firstUppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: string): any {

    return value.charAt(0).toUpperCase() + value.slice(1)
  }

}
