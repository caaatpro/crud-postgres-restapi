import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GroupEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: true})
    name: string;
}