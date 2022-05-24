import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyStaffNotificationArgs } from "./args/FindManyStaffNotificationArgs";
import { StaffNotification } from "../../../models/StaffNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class FindManyStaffNotificationResolver {
  @TypeGraphQL.Query(_returns => [StaffNotification], {
    nullable: false
  })
  async staffNotifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStaffNotificationArgs): Promise<StaffNotification[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
