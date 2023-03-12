import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { parseResolveInfo, ResolveTree } from 'graphql-parse-resolve-info';

export type PrismaSelect = {
  select: {
    [key: string]: true | PrismaSelect;
  };
};

export const Relations = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const info = GqlExecutionContext.create(ctx).getInfo<GraphQLResolveInfo>();
    const ast = parseResolveInfo(info);
    return astToPrisma(Object.values((ast as ResolveTree).fieldsByTypeName)[0]);
  },
);

export const astToPrisma = (ast: {
  [str: string]: ResolveTree;
}): PrismaSelect => {
  return {
    select: Object.fromEntries(
      Object.values(ast).map((field) => [
        field.name,
        Object.keys(field.fieldsByTypeName).length === 0
          ? true
          : astToPrisma(Object.values(field.fieldsByTypeName)[0]),
      ]),
    ),
  };
};
