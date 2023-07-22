import { Injectable } from '@nestjs/common';
import { CreateUserGroupInput } from './dto/create-user-group.input';
import { UpdateUserGroupInput } from './dto/update-user-group.input';

@Injectable()
export class UserGroupService {
  create(createUserGroupInput: CreateUserGroupInput) {
    return 'This action adds a new userGroup';
  }

  findAll() {
    return `This action returns all userGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGroup`;
  }

  update(id: string, updateUserGroupInput: UpdateUserGroupInput) {
    return `This action updates a #${id} userGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGroup`;
  }
}
