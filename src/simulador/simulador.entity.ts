import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sisu-data') 
export class SisuData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nomeIES: string;

  @Column({ type: 'varchar', length: 50 })
  siglaIES: string;

  @Column({ type: 'varchar', length: 255 })
  nomeCampus: string;

  @Column({ type: 'varchar', length: 10 })
  ufCampus: string;

  @Column({ type: 'varchar', length: 255 })
  municipioCampus: string;

  @Column({ type: 'varchar', length: 255 })
  nomeCurso: string;

  @Column({ type: 'varchar', length: 50 })
  grau: string;

  @Column({ type: 'varchar', length: 50 })
  turno: string;

  @Column({ type: 'varchar', length: 100 })
  modConcorrencia: string;

  @Column({ type: 'float' })
  pesoL: number;

  @Column({ type: 'float' })
  pesoCH: number;

  @Column({ type: 'float' })
  pesoCN: number;

  @Column({ type: 'float' })
  pesoM: number;

  @Column({ type: 'float' })
  pesoR: number;

  @Column({ type: 'float' })
  notaCorte: number;
}
