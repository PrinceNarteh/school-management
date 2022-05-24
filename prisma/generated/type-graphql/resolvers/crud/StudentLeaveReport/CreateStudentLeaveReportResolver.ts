import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateStudentLeaveReportArgs } from "./args/CreateStudentLeaveReportArgs";
import { StudentLeaveReport } from "../../../models/StudentLeaveReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentLeaveReport)
export class CreateStudentLeaveReportResolver {
  @TypeGraphQL.Mutation(_returns => StudentLeaveReport, {
    nullable: false
  })
  async createStudentLeaveReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStudentLeaveReportArgs): Promise<StudentLeaveReport> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentLeaveReport.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
