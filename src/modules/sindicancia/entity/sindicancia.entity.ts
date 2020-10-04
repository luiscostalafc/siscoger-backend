import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,

} from 'typeorm';

@Entity()
export class Sindicancia {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: 'id_andamentocoger', type: "int" })
  idAndamentocoger: number

  @Column({ name: 'id_andamentocoger', type: "int" })
  idAndamento: number

  @Column({ name: 'sjd_ref', type: "int" })
  sjdRef: number

  @Column({ name: 'sjd_ref', type: "int" })
  sjdRefAno: number

  @Column({ name: 'fato_data' })
  fatoData: Date

  @Column({ name: 'abertura_data' })
  aberturaData: Date

  @Column({ name: 'sintese_txt' })
  sinteseTxt: string

  @Column()
  cdopm: string

  @Column({ name: 'doc_tipo' })
  docTipo: string

  @Column({ name: 'doc_numero' })
  docNumero: string

  @Column({ name: 'doc_origem_txt' })
  docOrigemTxt: string

  @Column({ name: 'portaria_numero' })
  portariaNumero: string

  @Column({ name: 'portaria_data' })
  portariaData: Date

  @Column({ name: 'sol_cmt_file' })
  solCmtFile: string

  @Column({ name: 'sol_cmt_data' })
  solCmtData: Date

  @Column({ name: 'sol_cmtgeral_file' })
  solCmtgeralFile: string

  @Column({ name: 'sol_cmtgeral_data' })
  solCmtgeralData: Date

  @Column({ name: 'opm_meta4' })
  opmMeta4: string

  @Column({ name: 'relatorio_file' })
  relatorioFile: string

  @Column({ name: 'relatorio_data' })
  relatorioData: Date

  @Column()
  prioridade: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date

  @Column({ name: 'motivo_abertura' })
  motivoAbertura: string

  @Column({ name: 'motivo_outros' })
  motivoOutros: string

  @Column()
  prorogacao: boolean

  @Column({ name: 'prorogacao_dias' })
  prorogacaoDias: number
}