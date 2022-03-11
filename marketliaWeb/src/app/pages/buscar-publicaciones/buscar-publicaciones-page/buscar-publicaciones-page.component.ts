import { Component, OnInit } from '@angular/core';
import { MiPublicacion } from 'src/app/interfaces/mipublicacion.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-buscar-publicaciones-page',
  templateUrl: './buscar-publicaciones-page.component.html',
  styleUrls: ['./buscar-publicaciones-page.component.css']
})
export class BuscarPublicacionesPageComponent implements OnInit {
  publicacion: MiPublicacion = {
    id: '6969',
    titulo: 'Departamento de 4 pisos',
    descripcion: 'Excelente estado con hermosa vista al mirador de cumbaya, no tiene ningun detalles',
    precio: 234000,
    numeroPisos: 1,
    numeroBanos: 3,
    superficieConstruccion: 250,
    superficieAbierta: 50,
    numeroHabitaciones: 5,
    antiguedadAnos: 4,
    tipoPropiedad: 'Departamento',
    direccion: 'Cumbaya, cerca al paseo',
    ciudad: 'Quito',
    foto: 'https://elcomercio.pe/resizer/02VIzTJ4A2UsfFhDU5Fp-HWFLp4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5N6HAL2ZAZBIFN5M4ZPSXC7LOQ.jpg'
  };

  publicaciones:MiPublicacion[]=[]
  constructor(
    private servicePublicaciones: PublicacionesService
  ) { }

  ngOnInit(): void {
    this.getPublicaciones()
  }

  getPublicaciones(){
    this.servicePublicaciones.getPublicaciones().subscribe(data => {this.publicaciones = data })
  }

}
