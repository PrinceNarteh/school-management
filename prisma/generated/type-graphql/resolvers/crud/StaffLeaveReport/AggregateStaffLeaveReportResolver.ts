import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStaffLeaveReportArgs } from "./args/AggregateStaffLeaveReportArgs";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { AggregateStaffLeaveReport } from "../../outputs/AggregateStaffLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffLeaveReport)
export class AggregateStaffLeaveReportResolver {
  @TypeGraphQL.Query(_returns => AggregateStaffLeaveReport, {
    nullable: false
  })
  async aggregateStaffLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStaffLeaveReportArgs): Promise<AggregateStaffLeaveReport> {
    return getPrismaFromContext(ctx).staffLeaveReport.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
