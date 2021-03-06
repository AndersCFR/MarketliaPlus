import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

    MatDividerModule,
  ]
})
export class SharedModule { }
