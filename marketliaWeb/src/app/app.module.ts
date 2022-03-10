import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './pages/inicio/inicio.module';
import { LoginModule } from './pages/login/login.module';
import { MisPublicacionesModule } from './pages/mis-publicaciones/mis-publicaciones.module';
import { NuevaPublicacionModule } from './pages/nueva-publicacion/nueva-publicacion.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscarPublicacionesModule } from './pages/buscar-publicaciones/buscar-publicaciones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    InicioModule,
    LoginModule,
    MisPublicacionesModule,
    NuevaPublicacionModule,
    SharedModule,
    BuscarPublicacionesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
