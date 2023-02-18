import { Args, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { Relations } from 'src/common/decorators/relations';
import { UserService } from '../user.service';
import { Select } from '@prisma/prisma.types';
import { User } from './user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async userById(
    @Args('id', { nullable: true }) id: number,
    @Relations() relations: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.userService.getUserById(id, relations);
  }

  @Query(() => User)
  async userByUsername(
    @Args('username', { nullable: true }) username: string,
    @Relations() relations: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.userService.getUserByUsername(username, relations);
  }
}
