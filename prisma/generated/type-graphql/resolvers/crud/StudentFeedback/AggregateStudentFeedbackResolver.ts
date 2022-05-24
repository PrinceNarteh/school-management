import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStudentFeedbackArgs } from "./args/AggregateStudentFeedbackArgs";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { AggregateStudentFeedback } from "../../outputs/AggregateStudentFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class AggregateStudentFeedbackResolver {
  @TypeGraphQL.Query(_returns => AggregateStudentFeedback, {
    nullable: false
  })
  async aggregateStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStudentFeedbackArgs): Promise<AggregateStudentFeedback> {
    return getPrismaFromContext(ctx).studentFeedback.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
