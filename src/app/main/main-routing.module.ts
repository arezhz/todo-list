import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from '@app/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'boards', pathMatch: 'full'},
      {
        path: 'boards',
        //TODO: We need guard here
        loadChildren: () => import('./pages/boards/boards.module').then(m => m.BoardsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {

}
