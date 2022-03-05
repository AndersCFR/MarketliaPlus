import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { InfoAnuncioComponent } from './info-anuncio/info-anuncio.component';




@NgModule({
  declarations: [
    InicioPageComponent,
    BuscadorComponent,
    InfoAnuncioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InicioModule { }
