import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStudentNotificationArgs } from "./args/GroupByStudentNotificationArgs";
import { StudentNotification } from "../../../models/StudentNotification";
import { StudentNotificationGroupBy } from "../../outputs/StudentNotificationGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentNotification)
export class GroupByStudentNotificationResolver {
  @TypeGraphQL.Query(_returns => [StudentNotificationGroupBy], {
    nullable: false
  })
  async groupByStudentNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStudentNotificationArgs): Promise<StudentNotificationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentNotification.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
