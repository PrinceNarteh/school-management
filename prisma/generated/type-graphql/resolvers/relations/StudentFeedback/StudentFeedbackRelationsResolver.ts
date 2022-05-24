import * as TypeGraphQL from "type-graphql";
import { Student } from "../../../models/Student";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class StudentFeedbackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: false
  })
  async student(@TypeGraphQL.Root() studentFeedback: StudentFeedback, @TypeGraphQL.Ctx() ctx: any): Promise<Student> {
    return getPrismaFromContext(ctx).studentFeedback.findUnique({
      where: {
        id: studentFeedback.id,
      },
    }).student({});
  }
}
