import { Injectable } from '@nestjs/common';
import { CreateSocialLinkInput } from './dto/create-social-link.input';
import { UpdateSocialLinkInput } from './dto/update-social-link.input';

@Injectable()
export class SocialLinkService {
  create(createSocialLinkInput: CreateSocialLinkInput) {
    return 'This action adds a new socialLink';
  }

  findAll() {
    return `This action returns all socialLink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialLink`;
  }

  update(id: number, updateSocialLinkInput: UpdateSocialLinkInput) {
    return `This action updates a #${id} socialLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialLink`;
  }
}
