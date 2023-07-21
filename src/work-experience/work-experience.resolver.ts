import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperience } from './entities/work-experience.entity';
import { CreateWorkExperienceInput } from './dto/create-work-experience.input';
import { UpdateWorkExperienceInput } from './dto/update-work-experience.input';

@Resolver(() => WorkExperience)
export class WorkExperienceResolver {
  constructor(private readonly workExperienceService: WorkExperienceService) {}

  @Mutation(() => WorkExperience)
  createWorkExperience(@Args('createWorkExperienceInput') createWorkExperienceInput: CreateWorkExperienceInput) {
    return this.workExperienceService.create(createWorkExperienceInput);
  }

  @Query(() => [WorkExperience], { name: 'workExperience' })
  findAll() {
    return this.workExperienceService.findAll();
  }

  @Query(() => WorkExperience, { name: 'workExperience' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workExperienceService.findOne(id);
  }

  @Mutation(() => WorkExperience)
  updateWorkExperience(@Args('updateWorkExperienceInput') updateWorkExperienceInput: UpdateWorkExperienceInput) {
    return this.workExperienceService.update(updateWorkExperienceInput.id, updateWorkExperienceInput);
  }

  @Mutation(() => WorkExperience)
  removeWorkExperience(@Args('id', { type: () => Int }) id: number) {
    return this.workExperienceService.remove(id);
  }
}
