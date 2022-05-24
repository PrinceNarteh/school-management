import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStudentLeaveReportArgs } from "./args/AggregateStudentLeaveReportArgs";
import { StudentLeaveReport } from "../../../models/StudentLeaveReport";
import { AggregateStudentLeaveReport } from "../../outputs/AggregateStudentLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentLeaveReport)
export class AggregateStudentLeaveReportResolver {
  @TypeGraphQL.Query(_returns => AggregateStudentLeaveReport, {
    nullable: false
  })
  async aggregateStudentLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStudentLeaveReportArgs): Promise<AggregateStudentLeaveReport> {
    return getPrismaFromContext(ctx).studentLeaveReport.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
