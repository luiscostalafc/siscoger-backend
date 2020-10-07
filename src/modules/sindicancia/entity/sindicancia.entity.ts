import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,

} from 'typeorm';

@Entity('sindicancias')
export class Sindicancia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_andamentocoger', type: "int", nullable: true })
  idAndamentocoger: number

  @Column({ name: 'id_andamento', type: "int", nullable: true })
  idAndamento: number

  @Column({ name: 'sjd_ref', type: "int" })
  sjdRef: number

  @Column({ name: 'sjd_ref_ano', type: "int" })
  sjdRefAno: number

  @Column({ name: 'fato_data', nullable: true })
  fatoData: Date

  @Column({ name: 'abertura_data', nullable: true })
  aberturaData: Date

  @Column()
  sintese_txt: string

  @Column()
  cdopm: string

  @Column({ nullable: true })
  doc_tipo: string

  @Column({ nullable: true })
  docNumero: string

  @Column({ nullable: true })
  docOrigemTxt: string

  @Column({ nullable: true })
  portariaNumero: string

  @Column()
  portaria_data: Date

  @Column({ nullable: true })
  solCmtFile: string

  @Column({ nullable: true })
  solCmtData: Date

  @Column({ nullable: true })
  solCmtgeralFile: string

  @Column({ nullable: true })
  solCmtgeralData: Date

  @Column({ nullable: true })
  opmMeta4: string

  @Column({ nullable: true })
  relatorioFile: string

  @Column({ nullable: true })
  relatorioData: Date

  @Column()
  prioridade: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date

  @Column({ nullable: true })
  motivoAbertura: string

  @Column({ nullable: true })
  motivoCancelamento: string

  @Column({ nullable: true })
  motivoOutros: string

  @Column({ nullable: true })
  prorogacao: boolean

  @Column({ nullable: true })
  prorogacaoDias: number
}