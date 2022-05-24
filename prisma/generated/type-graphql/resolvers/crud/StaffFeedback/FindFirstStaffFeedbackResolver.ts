import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstStaffFeedbackArgs } from "./args/FindFirstStaffFeedbackArgs";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class FindFirstStaffFeedbackResolver {
  @TypeGraphQL.Query(_returns => StaffFeedback, {
    nullable: true
  })
  async findFirstStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStaffFeedbackArgs): Promise<StaffFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
