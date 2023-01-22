import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {
  }

  checkPassword(passwordControlName: string): ValidatorFn {
    return (controlName: AbstractControl): ValidationErrors | null => {
      const password = controlName.parent?.get(passwordControlName)?.value;
      return password !== controlName.value ? {notSame: true} : null;
    }
  }
}
