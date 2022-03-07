import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


export interface Menu{
  label: string,
  ruta: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbar: Menu[] = [
    {
      label: 'Comprar',
      ruta: '/'
    },
    {
      label: 'Alquilar',
      ruta: '/'
    },
    {
      label: 'Temporal',
      ruta: '/'
    },
    {
      label: 'Proyectos',
      ruta: '/'
    },
    {
      label: 'Facilita',
      ruta: '/'
    },
    {
      label: 'Data',
      ruta: '/'
    }
  ];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


}
