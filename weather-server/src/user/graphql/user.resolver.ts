import { Args, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { Relations } from '@common/decorators/relations.decorator';
import { UserService } from '../user.service';
import { Select } from '@prisma/prisma.types';
import { User } from './user.gq-type';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async userBy(
    @Args('email', { nullable: true }) email: string,
    @Relations() relations: Select<Prisma.UserSelect>,
  ): Promise<Partial<User>> {
    return this.userService.getUserByEmail(email, relations);
  }
}
