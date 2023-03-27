import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BoardsComponent} from '@app/main/pages/boards/boards.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent
    // TODO: We need resolver here
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BoardsRoutingModule {

}
