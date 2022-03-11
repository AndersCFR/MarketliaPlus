import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TipoPropiedad } from "./publicacion.model";

@Entity()
export class Publicacion{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    titulo: string;
    @Column()
    descripcion: string;
    @Column()
    precio: number;
    @Column()
    numeroPisos:  number;
    @Column()
    numeroBanos: number;
    @Column()
    superficieConstruccion: number;
    @Column()
    superficieAbierta?: number;
    @Column()
    numeroHabitaciones: number;
    @Column()
    antiguedadAnos: number;
    @Column()
    tipoPropiedad: TipoPropiedad;
    @Column()
    direccion: string;
    @Column()
    ciudad: string;
    @Column()
    foto: string;
}