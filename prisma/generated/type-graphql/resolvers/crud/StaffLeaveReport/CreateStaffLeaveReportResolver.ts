import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateStaffLeaveReportArgs } from "./args/CreateStaffLeaveReportArgs";
import { StaffLeaveReport } from "../../../models/StaffLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffLeaveReport)
export class CreateStaffLeaveReportResolver {
  @TypeGraphQL.Mutation(_returns => StaffLeaveReport, {
    nullable: false
  })
  async createStaffLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStaffLeaveReportArgs): Promise<StaffLeaveReport> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffLeaveReport.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
