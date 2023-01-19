import {Injectable} from '@angular/core';
import {AbstractControl, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {
  }

  checkPassword(passwordControlName: string): ValidatorFn {
    return (controlName: AbstractControl): { [key: string]: any } | null => {
      const password = controlName.parent?.get(passwordControlName)?.value;
      return password !== controlName.value ? {notSame: true} : null;
    }
  }
}
