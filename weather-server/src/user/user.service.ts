import { Prisma, User } from '@prisma/client';
import { Select } from '@prisma/prisma.types';
import { PrismaService } from '@prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserById(
    id: number,
    relations?: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      select: relations.select,
    });
  }

  async getUserByUsername(
    username: string,
    relations?: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
      select: relations.select,
    });
  }

  async createUser(
    data: User,
    relations: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.prisma.user.create({
      select: relations.select,
      data,
    });
  }
}
