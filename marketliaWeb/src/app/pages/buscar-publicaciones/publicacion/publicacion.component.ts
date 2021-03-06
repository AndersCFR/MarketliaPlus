import { Component, Input, OnInit } from '@angular/core';
import { MiPublicacion } from 'src/app/interfaces/mipublicacion.interface';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  @Input()
  publicacion: MiPublicacion = {
    id: 4040,
    titulo: 'lorem',
    descripcion: 'lorem',
    precio: -1,
    pisos: -1,
    numeroBanos: -1,
    construccion: -1,
    abierta: -1,
    numeroHab: -1,
    antiguedad: -1,
    tipoPropiedad: 'lorem',
    direccion: 'lorem',
    ciudad: 'lorem',
    foto: 'Inserte url imagen'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
