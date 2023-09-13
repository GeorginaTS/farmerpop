import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  user_id: number;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  state: number;
}
