import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FORM_ERRORS} from "@shared/services/form-error-list";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              @Inject(FORM_ERRORS) private error: any) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required, ),
      password: new FormControl('', Validators.required),
    })
  }
}
