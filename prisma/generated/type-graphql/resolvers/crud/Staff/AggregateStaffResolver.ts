import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStaffArgs } from "./args/AggregateStaffArgs";
import { Staff } from "../../../models/Staff";
import { AggregateStaff } from "../../outputs/AggregateStaff";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Staff)
export class AggregateStaffResolver {
  @TypeGraphQL.Query(_returns => AggregateStaff, {
    nullable: false
  })
  async aggregateStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStaffArgs): Promise<AggregateStaff> {
    return getPrismaFromContext(ctx).staff.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
