import { Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/common/decorators/relations';
import { PrismaService } from 'src/prisma.service';
import { User } from './user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(public prisma: PrismaService) {}
  @Query(() => [User])
  async usersWithRelationsResolver(
    @Relations() relations: { select: Prisma.UserSelect },
  ): Promise<Partial<User>[]> {
    return this.prisma.user.findMany({
      ...relations,
    });
  }
}
