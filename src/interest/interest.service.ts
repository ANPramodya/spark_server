import { Injectable } from '@nestjs/common';
import { CreateInterestInput } from './dto/create-interest.input';
import { UpdateInterestInput } from './dto/update-interest.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InterestService {
  constructor(private prisma: PrismaService) {}
  async create(createInterestInput: CreateInterestInput) {
    return await this.prisma.interest.create({
      data: { ...createInterestInput },
    });
    //TODO:try catch
  }

  async findAll() {
    return this.prisma.interest.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} interest`;
  }

  async findUserInterests(userId: string) {
    return await this.prisma.interest.findMany({ where: { userId } });
  }

  update(id: string, updateInterestInput: UpdateInterestInput) {
    return `This action updates a #${id} interest`;
  }

  remove(id: number) {
    return `This action removes a #${id} interest`;
  }
}
