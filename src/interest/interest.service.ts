import { Injectable } from '@nestjs/common';
import { CreateInterestInput } from './dto/create-interest.input';
import { UpdateInterestInput } from './dto/update-interest.input';

@Injectable()
export class InterestService {
  create(createInterestInput: CreateInterestInput) {
    return 'This action adds a new interest';
  }

  findAll() {
    return `This action returns all interest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interest`;
  }

  update(id: number, updateInterestInput: UpdateInterestInput) {
    return `This action updates a #${id} interest`;
  }

  remove(id: number) {
    return `This action removes a #${id} interest`;
  }
}
