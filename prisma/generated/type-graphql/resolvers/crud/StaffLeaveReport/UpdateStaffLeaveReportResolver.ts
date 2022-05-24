import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateStaffLeaveReportArgs } from "./args/UpdateStaffLeaveReportArgs";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffLeaveReport)
export class UpdateStaffLeaveReportResolver {
  @TypeGraphQL.Mutation(_returns => StaffLeaveReport, {
    nullable: true
  })
  async updateStaffLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStaffLeaveReportArgs): Promise<StaffLeaveReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffLeaveReport.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
