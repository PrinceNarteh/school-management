import * as TypeGraphQL from "type-graphql";
import { Staff } from "../../../models/Staff";
import { StaffNotification } from "../../../models/StaffNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class StaffNotificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() staffNotification: StaffNotification, @TypeGraphQL.Ctx() ctx: any): Promise<Staff> {
    return getPrismaFromContext(ctx).staffNotification.findUnique({
      where: {
        id: staffNotification.id,
      },
    }).staff({});
  }
}
