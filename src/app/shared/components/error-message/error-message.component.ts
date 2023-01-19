import {AfterViewInit, Component, Inject, Injector, Input} from '@angular/core';
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FORM_ERRORS} from "@shared/services/form-error-list";

@Component({
  standalone: true,
  selector: '[matErrorMessages]',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  imports: [
    MatFormFieldModule
  ],
})
export class ErrorMessageComponent implements AfterViewInit {
  @Input() errorText!: string;
  private inputRef!: MatFormFieldControl<MatInput>;

  constructor(private _inj: Injector,
              @Inject(FORM_ERRORS) private error: any,) {
  }

  ngAfterViewInit(): void {
    const container = this._inj.get(MatFormField);
    this.inputRef = container._control;
    this.inputRef.ngControl?.statusChanges?.subscribe(this.updateErrors);
  }

  private updateErrors = (state: 'VALID' | 'INVALID'): void => {
    if (state === 'INVALID') {
      // active errors on the FormControl
      const controlErrors = this.inputRef.ngControl?.errors;
      if (controlErrors) {
        const firstError = Object.keys(controlErrors)[0];
        if(firstError === 'minlength') {
          this.errorText = this.error[firstError](controlErrors['minlength'].requiredLength);
        } else {
          this.errorText = this.error[firstError]();
        }
      }
    }
  };
}
