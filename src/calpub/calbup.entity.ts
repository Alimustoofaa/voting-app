import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Calbup extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column()
    nama_bup: string;

    @Column()
    nama_wabup: string;

    @Column()
    visi: string;

    @Column()
    misi: string;
}