import { ValidatorFn } from '@angular/forms';

export interface InputAttr {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  type: string,
  rows?:number,
  cols?:number,
  validation?: ValidatorFn[],
  value?: any
}