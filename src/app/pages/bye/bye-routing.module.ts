import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByePage } from './bye.page';

const routes: Routes = [
  {
    path: '',
    component: ByePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByePageRoutingModule {}
