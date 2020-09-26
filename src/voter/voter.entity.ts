import { Calbup } from "src/calpub/calbup.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, Unique } from "typeorm";

@Entity()
@Unique(['uuid'])
export class Voter extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column()
    uuid: string;

    @Column({ 
        type: 'timestamp',
        name: 'voted_at',
        default: () => 'NOW()'
    })
    voted_at: Date;

    @ManyToOne(type => Calbup, calbup => calbup.voter, { eager: false })
    calbup: Calbup;
}