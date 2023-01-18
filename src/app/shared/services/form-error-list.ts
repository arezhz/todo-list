import {InjectionToken} from "@angular/core";

const errorList = {
  required: ()=> 'This field is required.'
}




export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => errorList
});
