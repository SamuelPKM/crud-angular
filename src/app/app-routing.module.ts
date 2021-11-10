import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/Usuarios/list/list.module').then(m => m.ListModule) }, { path: 'details', loadChildren: () => import('./pages/Usuarios/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/Usuarios/edit/edit.module').then(m => m.EditModule) }, { path: 'new', loadChildren: () => import('./pages/Usuarios/new/new.module').then(m => m.NewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
