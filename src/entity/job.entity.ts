import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'Job' })
export class Job {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  payload: string;

  @Column()
  status: string;

  @Column()
  tenentId: number;

  @Column()
  clientId: string;

  @Column()
  payloadSize: string;

  @Column()
  email: string;

}