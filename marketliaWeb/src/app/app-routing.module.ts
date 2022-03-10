import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPublicacionesPageComponent } from './pages/buscar-publicaciones/buscar-publicaciones-page/buscar-publicaciones-page.component';
import { InicioPageComponent } from './pages/inicio/inicio-page/inicio-page.component';
import { MisPublicacionesPageComponent } from './pages/mis-publicaciones/mis-publicaciones-page/mis-publicaciones-page.component';
import { NuevaPublicacionPageComponent } from './pages/nueva-publicacion/nueva-publicacion-page/nueva-publicacion-page.component';



const routes: Routes = [
  {
    path:'inicio',
    component: InicioPageComponent
  },
  {
    path: 'publicar',
    component: NuevaPublicacionPageComponent
  },
  {
    path: 'mispublicaciones',
    component: MisPublicacionesPageComponent
  },
  {
    path: 'buscarpubs',
    component:BuscarPublicacionesPageComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'buscarpubs'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
