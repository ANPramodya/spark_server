import { CreateAchievementInput } from './create-achievement.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAchievementInput extends PartialType(CreateAchievementInput) {
  @Field(() => Int)
  id: number;
}
