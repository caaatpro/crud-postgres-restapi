import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';
import { ManyToOne } from "typeorm";
import { UserEntity } from "../entities/user.entity";
export class UpdateUserDto {
    readonly id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    readonly lastName: string;

    @ApiProperty()
    @ManyToOne(type => UserEntity, user => user.id)
    readonly friends: UserEntity[];

    // @ApiProperty()
    // readonly friends: [{ type: Schema.Types.ObjectId, ref: 'User' }];
}