import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStaffFeedbackArgs } from "./args/AggregateStaffFeedbackArgs";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { AggregateStaffFeedback } from "../../outputs/AggregateStaffFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class AggregateStaffFeedbackResolver {
  @TypeGraphQL.Query(_returns => AggregateStaffFeedback, {
    nullable: false
  })
  async aggregateStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStaffFeedbackArgs): Promise<AggregateStaffFeedback> {
    return getPrismaFromContext(ctx).staffFeedback.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
