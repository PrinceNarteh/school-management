import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateAssessmentReportArgs } from "./args/UpdateAssessmentReportArgs";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AssessmentReport)
export class UpdateAssessmentReportResolver {
  @TypeGraphQL.Mutation(_returns => AssessmentReport, {
    nullable: true
  })
  async updateAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateAssessmentReportArgs): Promise<AssessmentReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
