import * as TypeGraphQL from "type-graphql";
import { Staff } from "../../../models/Staff";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class StaffFeedbackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() staffFeedback: StaffFeedback, @TypeGraphQL.Ctx() ctx: any): Promise<Staff> {
    return getPrismaFromContext(ctx).staffFeedback.findUnique({
      where: {
        id: staffFeedback.id,
      },
    }).staff({});
  }
}
