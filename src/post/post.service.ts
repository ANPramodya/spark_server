import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async create(createPostInput: CreatePostInput) {
    return await this.prisma.post.create({ data: { ...createPostInput } });
    //TODO: authorID or grouId is a must
  }

  async findAll() {
    return await this.prisma.post.findMany();
    //TODO:find according to a user specific pattern (relevence)
  }

  async findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
