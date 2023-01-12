import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {AuthComponent} from './auth.component';
import {RouterOutlet} from "@angular/router";
import {AuthRouterModule} from "./auth-router.module";


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule
  ]
})
export class AuthModule {
}
