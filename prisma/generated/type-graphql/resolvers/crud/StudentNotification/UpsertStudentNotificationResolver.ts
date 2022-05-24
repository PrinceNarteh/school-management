import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertStudentNotificationArgs } from "./args/UpsertStudentNotificationArgs";
import { StudentNotification } from "../../../models/StudentNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentNotification)
export class UpsertStudentNotificationResolver {
  @TypeGraphQL.Mutation(_returns => StudentNotification, {
    nullable: false
  })
  async upsertStudentNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertStudentNotificationArgs): Promise<StudentNotification> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentNotification.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
