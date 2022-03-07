import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatDialogModule,
  ]
})
export class LoginModule { }
