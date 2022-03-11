import { Component, OnInit } from '@angular/core';
import { MiPublicacion } from 'src/app/interfaces/mipublicacion.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-form-nueva-pub',
  templateUrl: './form-nueva-pub.component.html',
  styleUrls: ['./form-nueva-pub.component.css']
})
export class FormNuevaPubComponent implements OnInit {

  constructor(
    private miServicio: PublicacionesService
  ) {   }
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
 
  ngOnInit(): void {
  }

  registrarPublicacion(){
    console.log(this.miPublicacion)
    this.miServicio.guardarPublicacion(this.miPublicacion).subscribe(data => {console.log(data)})
  }

}
