import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaPublicacionPageComponent } from './nueva-publicacion-page/nueva-publicacion-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormNuevaPubComponent } from './form-nueva-pub/form-nueva-pub.component';



@NgModule({
  declarations: [
    NuevaPublicacionPageComponent,
    FormNuevaPubComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class NuevaPublicacionModule { }
