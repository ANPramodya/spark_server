import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

//TODO: try catch exceptions (id not found)
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

  //no updating allowed
  // update(id: number, updatePostInput: UpdatePostInput) {
  //   return `This action updates a #${id} post`;
  // }

  async remove(id: string) {
    return await this.prisma.post.delete({ where: { id } });
  }
}
