import * as TypeGraphQL from "type-graphql";
import { Assessment } from "../../../models/Assessment";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { Student } from "../../../models/Student";
import { Subject } from "../../../models/Subject";
import { AssessmentAssessmentReportArgs } from "./args/AssessmentAssessmentReportArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assessment)
export class AssessmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: false
  })
  async student(@TypeGraphQL.Root() assessment: Assessment, @TypeGraphQL.Ctx() ctx: any): Promise<Student> {
    return getPrismaFromContext(ctx).assessment.findUnique({
      where: {
        id: assessment.id,
      },
    }).student({});
  }

  @TypeGraphQL.FieldResolver(_type => Subject, {
    nullable: false
  })
  async subject(@TypeGraphQL.Root() assessment: Assessment, @TypeGraphQL.Ctx() ctx: any): Promise<Subject> {
    return getPrismaFromContext(ctx).assessment.findUnique({
      where: {
        id: assessment.id,
      },
    }).subject({});
  }

  @TypeGraphQL.FieldResolver(_type => [AssessmentReport], {
    nullable: false
  })
  async assessmentReport(@TypeGraphQL.Root() assessment: Assessment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AssessmentAssessmentReportArgs): Promise<AssessmentReport[]> {
    return getPrismaFromContext(ctx).assessment.findUnique({
      where: {
        id: assessment.id,
      },
    }).assessmentReport(args);
  }
}
