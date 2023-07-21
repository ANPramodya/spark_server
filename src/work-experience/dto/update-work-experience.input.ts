import { CreateWorkExperienceInput } from './create-work-experience.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkExperienceInput extends PartialType(CreateWorkExperienceInput) {
  @Field(() => Int)
  id: number;
}
