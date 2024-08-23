/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyNumbersAndMaxLenght(event: any, maxLength = 100) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode < 48 || charCode > 57 || event.target.value.length >= maxLength) {
    event.preventDefault();
    return false;
  }
  return true;
}

export function maxLength(event: any, max: number) {
  return event.target.value.length >= max;
}

export function matchValidator(source: string, target: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const sourceCtrl = control.get(source);
    const targetCtrl = control.get(target);
    // eslint-disable-next-line max-len
    return sourceCtrl &&
    targetCtrl &&
    sourceCtrl.touched &&
    sourceCtrl.dirty &&
    sourceCtrl?.value !== targetCtrl?.value ? { missmatch: true } : null;
  };
}
