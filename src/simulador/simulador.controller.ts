import { Controller, Post, Body, HttpCode, HttpStatus, Get, Query } from '@nestjs/common';
import { SimuladorService } from './simulador.service';
import { FindCoursesDto } from './dto/simulador.dto';

@Controller('simulador')
export class SimuladorController {
  constructor(private readonly simuladorService: SimuladorService) {}

  @Post('importar')
  @HttpCode(HttpStatus.OK)
  async importarCursos(@Body() cursos: any[]): Promise<{ message: string }> {
    try {
      await this.simuladorService.insertCourses(cursos);
      return { message: 'Cursos importados com sucesso!' };
    } catch (error) {
      console.error('Erro ao importar cursos:', error);
      throw new Error('Erro ao importar cursos');
    }
  }

  @Get()
  async findCourses(@Query() query: FindCoursesDto) {
    const { limit = 10, offset = 0, filter = {}, order = {} } = query;
    return this.simuladorService.findCourses(limit, offset, filter, order);
  }
}
