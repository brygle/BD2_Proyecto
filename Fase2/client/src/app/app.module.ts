import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { RouterModule } from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CunoComponent } from './components/cuno/cuno.component';
import { CdosComponent } from './components/cdos/cdos.component';
import { CtresComponent } from './components/ctres/ctres.component';
import { CcuatroComponent } from './components/ccuatro/ccuatro.component';
import { CcincoComponent } from './components/ccinco/ccinco.component';
import { RegistroCuentahabienteComponent } from './components/registro-cuentahabiente/registro-cuentahabiente.component';
import { RegistroInstitucionComponent } from './components/registro-institucion/registro-institucion.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CunoComponent,
    CdosComponent,
    CtresComponent,
    CcuatroComponent,
    CcincoComponent,
    RegistroCuentahabienteComponent,
    RegistroInstitucionComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
