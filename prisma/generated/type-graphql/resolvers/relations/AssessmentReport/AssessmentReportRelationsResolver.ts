import * as TypeGraphQL from "type-graphql";
import { Assessment } from "../../../models/Assessment";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { Student } from "../../../models/Student";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AssessmentReport)
export class AssessmentReportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: false
  })
  async student(@TypeGraphQL.Root() assessmentReport: AssessmentReport, @TypeGraphQL.Ctx() ctx: any): Promise<Student> {
    return getPrismaFromContext(ctx).assessmentReport.findUnique({
      where: {
        id: assessmentReport.id,
      },
    }).student({});
  }

  @TypeGraphQL.FieldResolver(_type => Assessment, {
    nullable: false
  })
  async assessment(@TypeGraphQL.Root() assessmentReport: AssessmentReport, @TypeGraphQL.Ctx() ctx: any): Promise<Assessment> {
    return getPrismaFromContext(ctx).assessmentReport.findUnique({
      where: {
        id: assessmentReport.id,
      },
    }).assessment({});
  }
}
