import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateStaffNotificationArgs } from "./args/UpdateStaffNotificationArgs";
import { StaffNotification } from "../../../models/StaffNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class UpdateStaffNotificationResolver {
  @TypeGraphQL.Mutation(_returns => StaffNotification, {
    nullable: true
  })
  async updateStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStaffNotificationArgs): Promise<StaffNotification | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
