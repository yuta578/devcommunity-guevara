import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './entities/students.entity';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({ summary: 'Crear un estudiante' })
  @ApiResponse({ status: 201, description: 'Estudiante creado correctamente', type: StudentEntity })
  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    return this.studentsService.create(createStudentDto);
  }

  @ApiOperation({ summary: 'Listar todos los estudiantes' })
  @ApiResponse({ status: 200, description: 'Lista de estudiantes', type: [StudentEntity] })
  @Get()
  findAll(): Promise<StudentEntity[]> {
    return this.studentsService.findAll();
  }
}
