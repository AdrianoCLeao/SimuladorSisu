import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimuladorService } from './simulador.service';
import { SimuladorController } from './simulador.controller';
import { SisuData } from './simulador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SisuData])],
  providers: [SimuladorService],
  controllers: [SimuladorController],
})
export class SimuladorModule {}
