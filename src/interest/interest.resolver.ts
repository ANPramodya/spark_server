import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { InterestService } from './interest.service';
import { Interest } from './entities/interest.entity';
import { CreateInterestInput } from './dto/create-interest.input';
import { UpdateInterestInput } from './dto/update-interest.input';

@Resolver(() => Interest)
export class InterestResolver {
  constructor(private readonly interestService: InterestService) {}

  @Mutation(() => Interest)
  createInterest(
    @Args('createInterestInput') createInterestInput: CreateInterestInput,
  ) {
    return this.interestService.create(createInterestInput);
  }

  @Query(() => [Interest], { name: 'interests' })
  findAll() {
    return this.interestService.findAll();
  }

  @Query(() => Interest, { name: 'interest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.interestService.findOne(id);
  }

  @Query(() => [Interest], { name: 'userInterests' })
  findUserInterests(@Args('userId', { type: () => ID }) userId: string) {
    return this.interestService.findUserInterests(userId);
  }

  @Mutation(() => Interest)
  updateInterest(
    @Args('updateInterestInput') updateInterestInput: UpdateInterestInput,
  ) {
    return this.interestService.update(
      updateInterestInput.id,
      updateInterestInput,
    );
  }

  @Mutation(() => Interest)
  removeInterest(@Args('id', { type: () => ID }) id: string) {
    return this.interestService.remove(id);
  }
}
