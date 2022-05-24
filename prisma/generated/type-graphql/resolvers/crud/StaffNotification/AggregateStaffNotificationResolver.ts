import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStaffNotificationArgs } from "./args/AggregateStaffNotificationArgs";
import { StaffNotification } from "../../../models/StaffNotification";
import { AggregateStaffNotification } from "../../outputs/AggregateStaffNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class AggregateStaffNotificationResolver {
  @TypeGraphQL.Query(_returns => AggregateStaffNotification, {
    nullable: false
  })
  async aggregateStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStaffNotificationArgs): Promise<AggregateStaffNotification> {
    return getPrismaFromContext(ctx).staffNotification.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
