import { Sindicancia } from 'src/modules/sindicancia/entity/sindicancia.entity';
import { Connection } from 'typeorm'
import { Seeder, Factory } from 'typeorm-seeding'

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // await connection
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Sindicancia)
    //   .values([{
    //     aberturaData: '2020-06-27T09:45:59.611Z',
    //     cdopm: '1841144582',
    //     docNumero: '85',
    //     docOrigemTxt: 'Ceasar Shields',
    //     docTipo: 'Hermina Volkman',
    //     fatoData: '2019-10-25T06:19:43.159Z',
    //     idAndamento: 1,
    //     idAndamentocoger: 1,
    //     motivoAbertura: 'Norbert Bode',
    //     motivoOutros: 'Mrs. Lemuel Murphy',
    //     opmMeta4: 'Ansel Macejkovic',
    //     portariaData: '2020-06-30T03:56:37.974Z',
    //     portariaNumero: '408',
    //     prioridade: true,
    //     prorogacao: false,
    //     prorogacaoDias: 16,
    //     relatorioData: '2020-08-17T12:22:50.369Z',
    //     relatorioFile: 'Rosalee Romaguera',
    //     sinteseTxt: 'Noemie Hodkiewicz MD',
    //     sjdRef: 804,
    //     sjdRefAno: 1352,
    //     solCmtFile: 'Edgar Simonis',
    //     solCmtgeralData: '2020-07-08T12:34:31.343Z',
    //     solCmtgeralFile: 'Anya Prosacco'
    //   }])
    //   .execute()
    
    await factory(Sindicancia)().createMany(10)
  }
}