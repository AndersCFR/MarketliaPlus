import { IsOptional, IsString } from 'class-validator';

export class ObtenerPublicacionFiltradaDTO{
    @IsOptional()
    @IsString()
    usuario?: string;
}