import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AchievementService } from './achievement.service';
import { Achievement } from './entities/achievement.entity';
import { CreateAchievementInput } from './dto/create-achievement.input';
import { UpdateAchievementInput } from './dto/update-achievement.input';

@Resolver(() => Achievement)
export class AchievementResolver {
  constructor(private readonly achievementService: AchievementService) {}

  @Mutation(() => Achievement)
  createAchievement(@Args('createAchievementInput') createAchievementInput: CreateAchievementInput) {
    return this.achievementService.create(createAchievementInput);
  }

  @Query(() => [Achievement], { name: 'achievement' })
  findAll() {
    return this.achievementService.findAll();
  }

  @Query(() => Achievement, { name: 'achievement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.achievementService.findOne(id);
  }

  @Mutation(() => Achievement)
  updateAchievement(@Args('updateAchievementInput') updateAchievementInput: UpdateAchievementInput) {
    return this.achievementService.update(updateAchievementInput.id, updateAchievementInput);
  }

  @Mutation(() => Achievement)
  removeAchievement(@Args('id', { type: () => Int }) id: number) {
    return this.achievementService.remove(id);
  }
}
