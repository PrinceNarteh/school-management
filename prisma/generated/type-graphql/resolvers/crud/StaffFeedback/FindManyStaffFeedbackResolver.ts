import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyStaffFeedbackArgs } from "./args/FindManyStaffFeedbackArgs";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class FindManyStaffFeedbackResolver {
  @TypeGraphQL.Query(_returns => [StaffFeedback], {
    nullable: false
  })
  async staffFeedbacks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStaffFeedbackArgs): Promise<StaffFeedback[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
