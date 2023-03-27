import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from '@app/main/main-routing.module';
import { MainComponent } from './main.component';
import {HeaderComponent} from '@app/layout/header/header.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderComponent
  ]
})
export class MainModule { }
