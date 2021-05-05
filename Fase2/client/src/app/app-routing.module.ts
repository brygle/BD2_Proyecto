import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CunoComponent } from './components/cuno/cuno.component';
import { CdosComponent } from './components/cdos/cdos.component';
import { CtresComponent } from './components/ctres/ctres.component';
import { CcuatroComponent } from './components/ccuatro/ccuatro.component';
import { CcincoComponent } from './components/ccinco/ccinco.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/C1',
    pathMatch: 'full'
  },
  {
    path: 'C1',
    component: CunoComponent
  },
  {
    path: 'C2',
    component: CdosComponent
  },
  {
    path: 'C3',
    component: CtresComponent
  },
  {
    path: 'C4',
    component: CcuatroComponent
  },
  {
    path: 'C5',
    component: CcincoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
