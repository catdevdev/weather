import { Prisma, User } from '@prisma/client';
import { Select } from '@prisma/prisma.types';
import { PrismaService } from '@prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

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
      select: relations?.select,
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
      select: relations?.select,
    });
  }

  async createUser(
    data: CreateUserDto,
    relations?: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        hash: data.hash,
      },
      select: relations?.select,
    });
  }

  async updateRtHash(
    hashedRt: string,
    userId: number,
    relations?: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt,
      },
      select: relations?.select,
    });
  }
}
