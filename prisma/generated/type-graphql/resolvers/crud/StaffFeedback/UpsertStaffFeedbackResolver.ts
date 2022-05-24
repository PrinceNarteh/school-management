import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertStaffFeedbackArgs } from "./args/UpsertStaffFeedbackArgs";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class UpsertStaffFeedbackResolver {
  @TypeGraphQL.Mutation(_returns => StaffFeedback, {
    nullable: false
  })
  async upsertStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertStaffFeedbackArgs): Promise<StaffFeedback> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
