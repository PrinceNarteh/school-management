import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStaffFeedbackArgs } from "./args/GroupByStaffFeedbackArgs";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { StaffFeedbackGroupBy } from "../../outputs/StaffFeedbackGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class GroupByStaffFeedbackResolver {
  @TypeGraphQL.Query(_returns => [StaffFeedbackGroupBy], {
    nullable: false
  })
  async groupByStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStaffFeedbackArgs): Promise<StaffFeedbackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
