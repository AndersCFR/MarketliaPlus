import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ActualizarPubicacionDTO } from './dto/actualizar-publicacion.dto';
import { CrearPubicacionDTO } from './dto/crear-publicacion.dto';
import { ObtenerPublicacionFiltradaDTO } from './dto/obtener-publicacion-filtrada';
import { Publicacion } from './publicacion.entity';
import { PublicacionService } from './publicacion.service';


@Controller('publicaciones')
export class PublicacionController {
    constructor(private publicacionesService: PublicacionService) {}
        
    @Get()
    getTasks(@Query() filterDto: ObtenerPublicacionFiltradaDTO): Promise<Publicacion[]> {
        return this.publicacionesService.getPublicacion(filterDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Publicacion> {
        return this.publicacionesService.getPublicacionById(id);
    }

    @Post()
    createTask(@Body() createPublicacionDto: CrearPubicacionDTO): Promise<Publicacion> {
        return this.publicacionesService.createPublicacion(createPublicacionDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): Promise<void> {
        return this.publicacionesService.deletePublicacion(id);
    }

    @Patch('/:id/titulo/descripcion/precio/numeroPisos/numeroBanos/superficieConstruccion/superficieAbierta/numeroHabitaciones/antiguedadAnos/tipoPropiedad/direccion/ciudad/foto')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updatePublicacionDto: ActualizarPubicacionDTO,
    ): Promise<Publicacion> {
        const {  
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
            foto } = updatePublicacionDto;
            
        return this.publicacionesService.updatePublicacion(
            id,        
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
            );
    }

}

