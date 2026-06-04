import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Ana', description: 'Nombre del estudiante' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'García', description: 'Apellido del estudiante' })
  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({ example: '2024001', description: 'Código del estudiante' })
  @IsString()
  @IsNotEmpty()
  codigo: string;
}
