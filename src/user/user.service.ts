import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

    async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = new UserEntity();
        user.name = createUserDto.name;
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;

        return this.userRepository.save(user);
    }

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<UserEntity> {
        return this.userRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return await this.userRepository.update(
            id,
            updateUserDto
        );
    }
}
