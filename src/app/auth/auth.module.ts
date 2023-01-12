import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {AuthComponent} from './auth.component';
import {AuthRouterModule} from "./auth-router.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AuthModule {
}
