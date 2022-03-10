import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarPublicacionesPageComponent } from './buscar-publicaciones-page/buscar-publicaciones-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltrosBusquedaComponent } from './filtros-busqueda/filtros-busqueda.component';
import { PublicacionComponent } from './publicacion/publicacion.component';



@NgModule({
  declarations: [
    BuscarPublicacionesPageComponent,
    FiltrosBusquedaComponent,
    PublicacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BuscarPublicacionesModule { }
