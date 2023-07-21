import { Injectable } from '@nestjs/common';
import { CreateAchievementInput } from './dto/create-achievement.input';
import { UpdateAchievementInput } from './dto/update-achievement.input';

@Injectable()
export class AchievementService {
  create(createAchievementInput: CreateAchievementInput) {
    return 'This action adds a new achievement';
  }

  findAll() {
    return `This action returns all achievement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} achievement`;
  }

  update(id: number, updateAchievementInput: UpdateAchievementInput) {
    return `This action updates a #${id} achievement`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievement`;
  }
}
