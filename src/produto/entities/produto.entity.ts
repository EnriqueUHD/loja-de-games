import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_jogos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 120, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 2,
    default: 0.0,
  })
  preco: number;

  @IsNotEmpty()
  @Column({ length: 200, nullable: true })
  sinopse: string;
}
