import * as TypeGraphQL from "type-graphql";
import { Assessment } from "../../../models/Assessment";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { Student } from "../../../models/Student";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { StudentLeaveReport } from "../../../models/StudentLeaveReport";
import { StudentNotification } from "../../../models/StudentNotification";
import { StudentAssessmentArgs } from "./args/StudentAssessmentArgs";
import { StudentAssessmentReportArgs } from "./args/StudentAssessmentReportArgs";
import { StudentNotificationsArgs } from "./args/StudentNotificationsArgs";
import { StudentStudentFeedbackArgs } from "./args/StudentStudentFeedbackArgs";
import { StudentStudentLeaveReportArgs } from "./args/StudentStudentLeaveReportArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Student)
export class StudentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [StudentNotification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentNotificationsArgs): Promise<StudentNotification[]> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).notifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Assessment], {
    nullable: false
  })
  async assessment(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentAssessmentArgs): Promise<Assessment[]> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).assessment(args);
  }

  @TypeGraphQL.FieldResolver(_type => [AssessmentReport], {
    nullable: false
  })
  async assessmentReport(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentAssessmentReportArgs): Promise<AssessmentReport[]> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).assessmentReport(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StudentLeaveReport], {
    nullable: false
  })
  async studentLeaveReport(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentStudentLeaveReportArgs): Promise<StudentLeaveReport[]> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).studentLeaveReport(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StudentFeedback], {
    nullable: false
  })
  async studentFeedback(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentStudentFeedbackArgs): Promise<StudentFeedback[]> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).studentFeedback(args);
  }
}
