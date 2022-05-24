import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStudentFeedbackArgs } from "./args/FindUniqueStudentFeedbackArgs";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class FindUniqueStudentFeedbackResolver {
  @TypeGraphQL.Query(_returns => StudentFeedback, {
    nullable: true
  })
  async studentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
