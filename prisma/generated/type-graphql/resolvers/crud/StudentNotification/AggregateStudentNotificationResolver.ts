import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStudentNotificationArgs } from "./args/AggregateStudentNotificationArgs";
import { StudentNotification } from "../../../models/StudentNotification";
import { AggregateStudentNotification } from "../../outputs/AggregateStudentNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentNotification)
export class AggregateStudentNotificationResolver {
  @TypeGraphQL.Query(_returns => AggregateStudentNotification, {
    nullable: false
  })
  async aggregateStudentNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStudentNotificationArgs): Promise<AggregateStudentNotification> {
    return getPrismaFromContext(ctx).studentNotification.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
