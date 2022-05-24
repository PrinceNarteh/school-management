import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStudentFeedbackArgs } from "./args/GroupByStudentFeedbackArgs";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { StudentFeedbackGroupBy } from "../../outputs/StudentFeedbackGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class GroupByStudentFeedbackResolver {
  @TypeGraphQL.Query(_returns => [StudentFeedbackGroupBy], {
    nullable: false
  })
  async groupByStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStudentFeedbackArgs): Promise<StudentFeedbackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
