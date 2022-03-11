/*
export interface Publicacion{
    id: string,    
    titulo: string
    descripcion: string,
    precio: number,
    numeroPisos:  number,
    numeroBanos: number,
    superficieConstruccion: number,
    superficieAbierta?: number,
    numeroHabitaciones: number,
    antiguedadAnos: number,
    tipoPropiedad: TipoPropiedad,
    direccion: string,
    ciudad: string,
    foto: string,
    //usuario: ModelUser
}*/

export enum TipoPropiedad{
    CASA = 'CASA',
    DEPARTAMENTO = 'DEPARTAMENTO',
    EDIFICIO = 'EDIFICIO',
    TERRENO = 'TERRENO'
}