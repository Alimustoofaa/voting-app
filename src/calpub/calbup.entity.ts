import { Voter } from "src/voter/voter.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

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

    @OneToMany(type => Voter, voter => voter.calbup, { eager: true})
    voter: Voter[]
}