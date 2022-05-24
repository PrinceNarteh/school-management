import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAssessmentReportArgs } from "./args/AggregateAssessmentReportArgs";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { AggregateAssessmentReport } from "../../outputs/AggregateAssessmentReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AssessmentReport)
export class AggregateAssessmentReportResolver {
  @TypeGraphQL.Query(_returns => AggregateAssessmentReport, {
    nullable: false
  })
  async aggregateAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssessmentReportArgs): Promise<AggregateAssessmentReport> {
    return getPrismaFromContext(ctx).assessmentReport.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
