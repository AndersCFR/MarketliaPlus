import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearPubicacionDTO } from './dto/crear-publicacion.dto';
import { ObtenerPublicacionFiltradaDTO } from './dto/obtener-publicacion-filtrada';
import { Publicacion } from './publicacion.entity';
import { TipoPropiedad } from './publicacion.model';
import { PublicacionRepository } from './publicacion.repository';

@Injectable()
export class PublicacionService {
    constructor(
        @InjectRepository(PublicacionRepository)
        private publicacionRepository: PublicacionRepository,
      ) {}
  
      getPublicacion(filterDto: ObtenerPublicacionFiltradaDTO): Promise<Publicacion[]> {
        return this.publicacionRepository.getPublicacionUsuario(filterDto);
      }
    
      async getPublicacionById(id: string): Promise<Publicacion> {
        const found = await this.publicacionRepository.findOne(id)
        if (!found) {
          throw new NotFoundException(`Publicación con ID "${id}" no encontrada!!`);
        }    
        return found;
      }
    
      createPublicacion(createPublicacionDto: CrearPubicacionDTO): Promise<Publicacion> {
        return this.publicacionRepository.createPublicacion(createPublicacionDto);
      }
    
      async deletePublicacion(id: string): Promise<void> {
        const result = await this.publicacionRepository.delete(id);
    
        if (result.affected === 0) {
          throw new NotFoundException(`Publicación con ID "${id}" no encontrada`);
        }
      }
    
      async updatePublicacion( 
        id: string,    
        titulo: string,
        descripcion: string,
        precio: number,
        numeroPisos:  number,
        numeroBanos: number,
        superficieConstruccion: number,
        superficieAbierta: number,
        numeroHabitaciones: number,
        antiguedadAnos: number,
        tipoPropiedad: TipoPropiedad,
        direccion: string,
        ciudad: string,
        foto: string,
        ): Promise<Publicacion> {
        const publicacion = await this.getPublicacionById(id);
        publicacion.id = id,
        publicacion.titulo = titulo,
        publicacion.descripcion = descripcion,
        publicacion.precio = precio,
        publicacion.numeroPisos = numeroPisos,
        publicacion.numeroBanos = numeroBanos,
        publicacion.superficieConstruccion = superficieConstruccion,
        publicacion.superficieAbierta = superficieAbierta,
        publicacion.numeroHabitaciones = numeroHabitaciones,
        publicacion.antiguedadAnos = antiguedadAnos,
        publicacion.tipoPropiedad = tipoPropiedad,
        publicacion.direccion = direccion,  
        publicacion.ciudad = ciudad,    
        publicacion.foto = foto
        await this.publicacionRepository.save(publicacion);
        return publicacion;
      }
}