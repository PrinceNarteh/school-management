import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAssessmentReportArgs } from "./args/GroupByAssessmentReportArgs";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { AssessmentReportGroupBy } from "../../outputs/AssessmentReportGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AssessmentReport)
export class GroupByAssessmentReportResolver {
  @TypeGraphQL.Query(_returns => [AssessmentReportGroupBy], {
    nullable: false
  })
  async groupByAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAssessmentReportArgs): Promise<AssessmentReportGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
