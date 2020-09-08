import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupEntity } from './entities/group.entity';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(GroupEntity)
        private readonly groupRepository: Repository<GroupEntity>,
    ) {}

    async create(createGroupDto: CreateGroupDto): Promise<GroupEntity> {
        const group = new GroupEntity();
        group.name = createGroupDto.name;

        return this.groupRepository.save(group);
    }

    async findAll(): Promise<GroupEntity[]> {
        return this.groupRepository.find();
    }

    async findOne(id: string): Promise<GroupEntity> {
        return await this.groupRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.groupRepository.delete(id);
    }

    async update(
        id: string,
        updateGroupDto: UpdateGroupDto,
    ): Promise<UpdateResult> {
        return await this.groupRepository.update(
            id,
            updateGroupDto
        );
    }
}
