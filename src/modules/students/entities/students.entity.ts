import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class StudentEntity {
  @ApiProperty({ example: 1, description: 'Identificador único del estudiante' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Ana', description: 'Nombre del estudiante' })
  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @ApiProperty({ example: 'García', description: 'Apellido del estudiante' })
  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @ApiProperty({ example: '2024001', description: 'Código del estudiante' })
  @Column({ type: 'varchar', length: 20, unique: true })
  codigo: string;
}
