import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {AuthComponent} from './auth.component';
import {AuthRouterModule} from "./auth-router.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {ErrorMessageComponent} from "@shared/components/error-message/error-message.component";

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ErrorMessageComponent
  ]
})
export class AuthModule {
}
