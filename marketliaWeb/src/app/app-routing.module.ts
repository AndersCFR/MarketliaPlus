import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio/inicio-page/inicio-page.component';
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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
