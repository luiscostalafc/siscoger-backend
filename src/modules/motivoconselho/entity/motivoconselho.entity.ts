import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Motivoconselhos')
export class Motivoconselho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  motivoconselho: string
}