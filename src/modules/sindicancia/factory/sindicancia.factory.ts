import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Sindicancia } from 'src/modules/sindicancia/entity/sindicancia.entity';

define(Sindicancia, (faker: typeof Faker) => {
  const factory = new Sindicancia()
  factory.aberturaData = faker.date.past(1)
  factory.cdopm = faker.random.number(9999999999).toString()
  factory.docNumero = faker.random.number(99).toString()
  factory.docOrigemTxt = faker.name.findName()
  factory.doc_tipo = faker.name.findName()
  factory.fatoData = faker.date.past(1)
  factory.idAndamento = 1
  factory.idAndamentocoger = 1
  factory.motivoAbertura = faker.name.findName()
  factory.motivoOutros = faker.name.findName()
  factory.opmMeta4 = faker.name.findName()
  factory.portaria_data = faker.date.past(1)
  factory.portariaNumero = faker.random.number(999).toString()
  factory.prioridade = faker.random.boolean()
  factory.prorogacao = faker.random.boolean()
  factory.prorogacaoDias = faker.random.number(99)
  factory.relatorioData = faker.date.past(1)
  factory.relatorioFile = faker.name.findName()
  factory.sintese_txt = faker.name.findName()
  factory.sjdRef = faker.random.number(999)
  factory.sjdRefAno = faker.random.number(2020)
  factory.solCmtFile = faker.name.findName()
  factory.solCmtgeralData = faker.date.past(1)
  factory.solCmtgeralFile = faker.name.findName()
  console.log(factory)
  return factory
})