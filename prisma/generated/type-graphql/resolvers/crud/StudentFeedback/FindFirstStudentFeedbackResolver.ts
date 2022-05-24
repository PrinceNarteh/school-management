import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstStudentFeedbackArgs } from "./args/FindFirstStudentFeedbackArgs";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class FindFirstStudentFeedbackResolver {
  @TypeGraphQL.Query(_returns => StudentFeedback, {
    nullable: true
  })
  async findFirstStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
