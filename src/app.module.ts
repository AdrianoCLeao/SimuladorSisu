import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SisuData } from './simulador/simulador.entity';
import { SimuladorModule } from './simulador/simulador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [SisuData],
      synchronize: true, 
    }),
    SimuladorModule, 
  ],
})
export class AppModule {}
