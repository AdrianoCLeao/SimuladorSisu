import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SisuData } from './simulador.entity';

@Injectable()
export class SimuladorService {
  constructor(
    @InjectRepository(SisuData)
    private sisuDataRepository: Repository<SisuData>,
  ) {}

  async insertCourses(courses: any[]): Promise<void> {
    const entities = courses.map(course => ({
      nomeIES: course.nomeIES,
      siglaIES: course.siglaIES,
      nomeCampus: course.nomeCampus,
      ufCampus: course.ufCampus,
      municipioCampus: course.municipioCampus,
      nomeCurso: course.nomeCurso,
      grau: course.grau,
      turno: course.turno,
      modConcorrencia: course.modConcorrencia,
      pesoL: course.pesoL,
      pesoCH: course.pesoCH,
      pesoCN: course.pesoCN,
      pesoM: course.pesoM,
      pesoR: course.pesoR,
      notaCorte: course.notaCorte,
    }));
    
    await this.sisuDataRepository.save(entities);
  }

  async findCourses(
    limit: number = 10,
    offset: number = 0,
    filter: any = {},
    order: any = {}
  ): Promise<SisuData[]> {
    const options: FindManyOptions<SisuData> = {
      take: limit,
      skip: offset,
      where: filter,
      order: order,
    };

    return this.sisuDataRepository.find(options);
  }
}
