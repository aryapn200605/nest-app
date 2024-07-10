import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { karyawanStatus } from './karyawan-status.enum';

@Entity()
export class Pinjam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  department: string;

  @Column()
  date_of_entry: Date;

  @Column()
  photo: string;

  @Column({
    type: 'enum',
    enum: karyawanStatus,
    default: karyawanStatus.KONTRAK,
  })
  status: karyawanStatus;
}
