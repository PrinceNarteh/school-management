import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateStaffNotificationArgs } from "./args/CreateStaffNotificationArgs";
import { StaffNotification } from "../../../models/StaffNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class CreateStaffNotificationResolver {
  @TypeGraphQL.Mutation(_returns => StaffNotification, {
    nullable: false
  })
  async createStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStaffNotificationArgs): Promise<StaffNotification> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
