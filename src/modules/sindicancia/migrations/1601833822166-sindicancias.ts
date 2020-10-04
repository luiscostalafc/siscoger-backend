import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class sindicancias1601833822166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "sindicancias",
            columns: [
                { name: "id", type: "int", isPrimary: true },
                { name: "id_andamentocoger", type: "int", default: 0},
                { name: "id_andamento", type: "int", default: 6},
                { name: "sjd_ref", type: "int", default: 0},
                { name: "sjd_ref_ano", type: "int", default: 0},
                { name: "fato_data", type: "varchar", },
                { name: "abertura_data", type: "varchar", },
                { name: "sintese_txt", type: "varchar", },
                { name: "cdopm", type: "varchar", },
                { name: "doc_tipo", type: "varchar", },
                { name: "doc_numero", type: "varchar", },
                { name: "doc_origem_txt", type: "varchar", },
                { name: "portaria_numero", type: "varchar", },
                { name: "portaria_data", type: "varchar", },
                { name: "sol_cmt_file", type: "varchar", },
                { name: "sol_cmt_data", type: "varchar", },
                { name: "sol_cmtgeral_file", type: "varchar", },
                { name: "sol_cmtgeral_data", type: "varchar", },
                { name: "opm_meta4", type: "varchar", },
                { name: "relatorio_file", type: "varchar", },
                { name: "relatorio_data", type: "varchar", },
                { name: "prioridade", type: "varchar", },
                { name: "created_at", type: "timestamp", default: 'now()'},
                { name: "updated_at", type: "timestamp", },
                { name: "deleted_at", type: "timestamp", default: null},
                { name: "motivo_abertura", type: "varchar", },
                { name: "motivo_outros", type: "varchar", },
                { name: "prorogacao", type: "boolean", default: false},
                { name: "prorogacao_dias", type: "int", default: 0},
            ]
        }), true)

        // await queryRunner.createForeignKey("andamento", new TableForeignKey({
        //     columnNames: ["id_andamento"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "andamento",
        //     onDelete: "CASCADE"
        // }));

        // await queryRunner.createForeignKey("answer", new TableForeignKey({
        //     columnNames: ["id_andamentocoger"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "andamentocoger",
        //     onDelete: "CASCADE"
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sindicancias");
    }

}
