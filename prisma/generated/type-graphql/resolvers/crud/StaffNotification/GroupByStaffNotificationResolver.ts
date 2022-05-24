import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStaffNotificationArgs } from "./args/GroupByStaffNotificationArgs";
import { StaffNotification } from "../../../models/StaffNotification";
import { StaffNotificationGroupBy } from "../../outputs/StaffNotificationGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class GroupByStaffNotificationResolver {
  @TypeGraphQL.Query(_returns => [StaffNotificationGroupBy], {
    nullable: false
  })
  async groupByStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStaffNotificationArgs): Promise<StaffNotificationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
