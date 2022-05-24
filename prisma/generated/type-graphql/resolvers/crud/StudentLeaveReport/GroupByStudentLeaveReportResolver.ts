import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStudentLeaveReportArgs } from "./args/GroupByStudentLeaveReportArgs";
import { StudentLeaveReport } from "../../../models/StudentLeaveReport";
import { StudentLeaveReportGroupBy } from "../../outputs/StudentLeaveReportGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentLeaveReport)
export class GroupByStudentLeaveReportResolver {
  @TypeGraphQL.Query(_returns => [StudentLeaveReportGroupBy], {
    nullable: false
  })
  async groupByStudentLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStudentLeaveReportArgs): Promise<StudentLeaveReportGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentLeaveReport.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
