import { TipoPropiedad } from '../publicacion.model'
import { IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class ActualizarPubicacionDTO{
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    titulo: string;
    @IsNotEmpty()
    descripcion: string;
    @IsNotEmpty()
    precio: number;
    @IsNotEmpty()
    numeroPisos:  number;
    @IsNotEmpty()
    numeroBanos: number;
    @IsNotEmpty()
    superficieConstruccion: number;
    @IsOptional()
    superficieAbierta?: number;
    @IsNotEmpty()
    numeroHabitaciones: number;
    @IsNotEmpty()
    antiguedadAnos: number;
    @IsEnum(TipoPropiedad)
    tipoPropiedad: TipoPropiedad;
    @IsNotEmpty()
    direccion: string;
    @IsNotEmpty()
    ciudad: string;
    @IsNotEmpty()
    foto: string;
}