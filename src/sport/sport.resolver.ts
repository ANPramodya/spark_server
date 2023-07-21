import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SportService } from './sport.service';
import { Sport } from './entities/sport.entity';
import { CreateSportInput } from './dto/create-sport.input';
import { UpdateSportInput } from './dto/update-sport.input';

@Resolver(() => Sport)
export class SportResolver {
  constructor(private readonly sportService: SportService) {}

  @Mutation(() => Sport)
  createSport(@Args('createSportInput') createSportInput: CreateSportInput) {
    return this.sportService.create(createSportInput);
  }

  @Query(() => [Sport], { name: 'sport' })
  findAll() {
    return this.sportService.findAll();
  }

  @Query(() => Sport, { name: 'sport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sportService.findOne(id);
  }

  @Mutation(() => Sport)
  updateSport(@Args('updateSportInput') updateSportInput: UpdateSportInput) {
    return this.sportService.update(updateSportInput.id, updateSportInput);
  }

  @Mutation(() => Sport)
  removeSport(@Args('id', { type: () => Int }) id: number) {
    return this.sportService.remove(id);
  }
}
