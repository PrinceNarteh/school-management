import * as TypeGraphQL from "type-graphql";
import { Student } from "../../../models/Student";
import { StudentLeaveReport } from "../../../models/StudentLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentLeaveReport)
export class StudentLeaveReportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: false
  })
  async student(@TypeGraphQL.Root() studentLeaveReport: StudentLeaveReport, @TypeGraphQL.Ctx() ctx: any): Promise<Student> {
    return getPrismaFromContext(ctx).studentLeaveReport.findUnique({
      where: {
        id: studentLeaveReport.id,
      },
    }).student({});
  }
}
