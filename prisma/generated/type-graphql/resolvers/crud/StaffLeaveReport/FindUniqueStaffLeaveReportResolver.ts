import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStaffLeaveReportArgs } from "./args/FindUniqueStaffLeaveReportArgs";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffLeaveReport)
export class FindUniqueStaffLeaveReportResolver {
  @TypeGraphQL.Query(_returns => StaffLeaveReport, {
    nullable: true
  })
  async staffLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStaffLeaveReportArgs): Promise<StaffLeaveReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffLeaveReport.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
