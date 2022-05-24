import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteStaffLeaveReportArgs } from "./args/DeleteStaffLeaveReportArgs";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffLeaveReport)
export class DeleteStaffLeaveReportResolver {
  @TypeGraphQL.Mutation(_returns => StaffLeaveReport, {
    nullable: true
  })
  async deleteStaffLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteStaffLeaveReportArgs): Promise<StaffLeaveReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffLeaveReport.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
