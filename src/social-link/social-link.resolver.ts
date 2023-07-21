import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SocialLinkService } from './social-link.service';
import { SocialLink } from './entities/social-link.entity';
import { CreateSocialLinkInput } from './dto/create-social-link.input';
import { UpdateSocialLinkInput } from './dto/update-social-link.input';

@Resolver(() => SocialLink)
export class SocialLinkResolver {
  constructor(private readonly socialLinkService: SocialLinkService) {}

  @Mutation(() => SocialLink)
  createSocialLink(@Args('createSocialLinkInput') createSocialLinkInput: CreateSocialLinkInput) {
    return this.socialLinkService.create(createSocialLinkInput);
  }

  @Query(() => [SocialLink], { name: 'socialLink' })
  findAll() {
    return this.socialLinkService.findAll();
  }

  @Query(() => SocialLink, { name: 'socialLink' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.socialLinkService.findOne(id);
  }

  @Mutation(() => SocialLink)
  updateSocialLink(@Args('updateSocialLinkInput') updateSocialLinkInput: UpdateSocialLinkInput) {
    return this.socialLinkService.update(updateSocialLinkInput.id, updateSocialLinkInput);
  }

  @Mutation(() => SocialLink)
  removeSocialLink(@Args('id', { type: () => Int }) id: number) {
    return this.socialLinkService.remove(id);
  }
}
