import * as TypeGraphQL from "type-graphql";
import { Staff } from "../../../models/Staff";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffLeaveReport)
export class StaffLeaveReportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() staffLeaveReport: StaffLeaveReport, @TypeGraphQL.Ctx() ctx: any): Promise<Staff> {
    return getPrismaFromContext(ctx).staffLeaveReport.findUnique({
      where: {
        id: staffLeaveReport.id,
      },
    }).staff({});
  }
}
