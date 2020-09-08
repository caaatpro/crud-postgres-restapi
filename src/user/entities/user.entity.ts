import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => UserEntity, user => user.id)
    friends: UserEntity[];

    // groups: [ { type: mongoose.Schema.Types.ObjectId, ref: "Group" } ],
    // friends: [ { type: mongoose.Schema.Types.ObjectId, ref: "User" } ],
}