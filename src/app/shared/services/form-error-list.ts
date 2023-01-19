import {InjectionToken} from "@angular/core";

const errorList = {
  required: ()=> 'This field is required.',
  email: ()=> `Please enter your email address`,
  minlength: (minLength: number)=> `You must at least input ${minLength} character.`,
}




export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => errorList
});
