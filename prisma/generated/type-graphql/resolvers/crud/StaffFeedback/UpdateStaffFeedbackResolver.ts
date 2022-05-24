import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateStaffFeedbackArgs } from "./args/UpdateStaffFeedbackArgs";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class UpdateStaffFeedbackResolver {
  @TypeGraphQL.Mutation(_returns => StaffFeedback, {
    nullable: true
  })
  async updateStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStaffFeedbackArgs): Promise<StaffFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
