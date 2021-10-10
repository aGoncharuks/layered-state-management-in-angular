import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule) }, { path: 'other', loadChildren: () => import('./other/other.module').then(m => m.OtherModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
