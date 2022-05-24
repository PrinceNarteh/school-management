import * as TypeGraphQL from "type-graphql";
import { Staff } from "../../../models/Staff";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { StaffNotification } from "../../../models/StaffNotification";
import { Subject } from "../../../models/Subject";
import { StaffStaffFeedbackArgs } from "./args/StaffStaffFeedbackArgs";
import { StaffStaffLeaveReportArgs } from "./args/StaffStaffLeaveReportArgs";
import { StaffStaffNotificationArgs } from "./args/StaffStaffNotificationArgs";
import { StaffSubjectsArgs } from "./args/StaffSubjectsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Staff)
export class StaffRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subject], {
    nullable: false
  })
  async subjects(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StaffSubjectsArgs): Promise<Subject[]> {
    return getPrismaFromContext(ctx).staff.findUnique({
      where: {
        id: staff.id,
      },
    }).subjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StaffNotification], {
    nullable: false
  })
  async staffNotification(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StaffStaffNotificationArgs): Promise<StaffNotification[]> {
    return getPrismaFromContext(ctx).staff.findUnique({
      where: {
        id: staff.id,
      },
    }).staffNotification(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StaffLeaveReport], {
    nullable: false
  })
  async staffLeaveReport(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StaffStaffLeaveReportArgs): Promise<StaffLeaveReport[]> {
    return getPrismaFromContext(ctx).staff.findUnique({
      where: {
        id: staff.id,
      },
    }).staffLeaveReport(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StaffFeedback], {
    nullable: false
  })
  async staffFeedback(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StaffStaffFeedbackArgs): Promise<StaffFeedback[]> {
    return getPrismaFromContext(ctx).staff.findUnique({
      where: {
        id: staff.id,
      },
    }).staffFeedback(args);
  }
}
