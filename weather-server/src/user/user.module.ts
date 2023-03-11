import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './graphql/user.resolver';
import { PrismaService } from '@prisma/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
