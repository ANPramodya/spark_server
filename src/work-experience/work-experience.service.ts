import { Injectable } from '@nestjs/common';
import { CreateWorkExperienceInput } from './dto/create-work-experience.input';
import { UpdateWorkExperienceInput } from './dto/update-work-experience.input';

@Injectable()
export class WorkExperienceService {
  create(createWorkExperienceInput: CreateWorkExperienceInput) {
    return 'This action adds a new workExperience';
  }

  findAll() {
    return `This action returns all workExperience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workExperience`;
  }

  update(id: number, updateWorkExperienceInput: UpdateWorkExperienceInput) {
    return `This action updates a #${id} workExperience`;
  }

  remove(id: number) {
    return `This action removes a #${id} workExperience`;
  }
}
