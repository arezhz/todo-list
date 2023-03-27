import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardsRoutingModule} from '@app/main/pages/boards/boards-routing.module';
import { BoardsComponent } from './boards.component';



@NgModule({
  declarations: [
    BoardsComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
