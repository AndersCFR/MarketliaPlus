import { EntityRepository, Repository } from "typeorm";
import { CrearPubicacionDTO } from "./dto/crear-publicacion.dto";

import { ObtenerPublicacionFiltradaDTO } from "./dto/obtener-publicacion-filtrada";

import { Publicacion } from "./publicacion.entity";

@EntityRepository(Publicacion)
export class PublicacionRepository extends Repository<Publicacion> {    
    async getPublicacionUsuario(filterDto: ObtenerPublicacionFiltradaDTO): Promise<Publicacion[]> {
        const { usuario } = filterDto;    
        const query = this.createQueryBuilder('usuario');
    
        if (usuario) {
          query.andWhere('publicacion.usuario = :usuario', { usuario });
        }
    
        const tasks = await query.getMany();
        return tasks;
      }
    
      async createPublicacion(createPublicacionDto: CrearPubicacionDTO): Promise<Publicacion> {
        const {
            //id,
            titulo,
            descripcion,
            precio,
            numeroPisos,
            numeroBanos,
            superficieConstruccion,
            superficieAbierta,
            numeroHabitaciones,
            antiguedadAnos,
            tipoPropiedad,
            direccion,  
            ciudad,    
            foto
        } = createPublicacionDto;

        const task = this.create({
            //id,
            titulo,
            descripcion,
            precio,
            numeroPisos,
            numeroBanos,
            superficieConstruccion,
            superficieAbierta,
            numeroHabitaciones,
            antiguedadAnos,
            tipoPropiedad,
            direccion,  
            ciudad,    
            foto
        });
    
        await this.save(task);
        return task;
      }
}