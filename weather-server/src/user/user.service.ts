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
  ): Promise<Partial<User>> | null {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      select: relations?.select,
    });
  }

  async getUserByEmail(
    email: string,
    relations?: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> | null {
    return this.prisma.user.findUnique({
      where: {
        email,
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
    userId: number,
    hashedRt: string,
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

  async removeRtHash(userId: number): Promise<void> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
  }
}
