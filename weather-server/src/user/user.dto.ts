import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field() user: string;
  @Field() email: string;
  @Field() name: string;
}
