import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MiPublicacion } from '../interfaces/mipublicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  url: string = environment.url;
  constructor(private http: HttpClient) 
  { }
  getPublicaciones(){
    return this.http.get<MiPublicacion[]>(`${this.url}publicaciones`)
  }

  guardarPublicacion(publicacion: MiPublicacion){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const mi_publicacion = {
      titulo: publicacion.titulo,
      descripcion: publicacion.descripcion,
      precio: publicacion.precio,
      numeroPisos: publicacion.numeroPisos,
      numeroBanos: publicacion.numeroBanos,
      superficieConstruccion: publicacion.superficieConstruccion,
      superficieAbierta: publicacion.superficieAbierta,
      numeroHabitaciones: publicacion.numeroHabitaciones,
      antiguedadAnos: publicacion.antiguedadAnos,
      tipoPropiedad: publicacion.tipoPropiedad,
      direccion: publicacion.direccion,  
      ciudad: publicacion.ciudad,    
      foto: 'https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso.jpg'     
    }
    console.log(mi_publicacion)
    return this.http.post(`${this.url}publicaciones`, JSON.stringify(mi_publicacion), {...httpOptions
    })
  }
}
