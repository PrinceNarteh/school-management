import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateStudentFeedbackArgs } from "./args/UpdateStudentFeedbackArgs";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class UpdateStudentFeedbackResolver {
  @TypeGraphQL.Mutation(_returns => StudentFeedback, {
    nullable: true
  })
  async updateStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
