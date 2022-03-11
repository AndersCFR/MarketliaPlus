import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisPublicacionesPageComponent } from './mis-publicaciones-page/mis-publicaciones-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltroMisPublicacionesComponent } from './filtro-mis-publicaciones/filtro-mis-publicaciones.component';
import { MiPublicacionComponent } from './mi-publicacion/mi-publicacion.component';



@NgModule({
  declarations: [
    MisPublicacionesPageComponent,
    FiltroMisPublicacionesComponent,
    MiPublicacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MisPublicacionesModule { }
