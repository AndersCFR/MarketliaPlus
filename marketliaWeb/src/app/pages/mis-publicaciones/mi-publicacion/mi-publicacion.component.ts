import { Component, Input, OnInit } from '@angular/core';
import { MiPublicacion } from 'src/app/interfaces/mipublicacion.interface';

@Component({
  selector: 'app-mi-publicacion',
  templateUrl: './mi-publicacion.component.html',
  styleUrls: ['./mi-publicacion.component.css']
})
export class MiPublicacionComponent implements OnInit {

  @Input()
  miPublicacion: MiPublicacion = {
    id: '4040',
    titulo: 'lorem',
    descripcion: 'lorem',
    precio: -1,
    numeroPisos: -1,
    numeroBanos: -1,
    superficieConstruccion: -1,
    superficieAbierta: -1,
    numeroHabitaciones: -1,
    antiguedadAnos: -1,
    tipoPropiedad: 'lorem',
    direccion: 'lorem',
    ciudad: 'lorem',
    foto: 'Inserte url imagen'
  };
  constructor() { }

  ngOnInit(): void {
  }

  borrarMiPublicacion(id: string){
    console.log('El id a borrar es', id)
    //TODO Eventemitter para actualizar la lista
  }

}
