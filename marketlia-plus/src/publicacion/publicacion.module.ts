import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicacionService } from './publicacion.service';
import { PublicacionRepository } from './publicacion.repository';
import { PublicacionController } from './publicacion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PublicacionRepository])
  ],
  controllers: [PublicacionController],
  providers: [PublicacionService]
})
export class PublicacionModule {}
