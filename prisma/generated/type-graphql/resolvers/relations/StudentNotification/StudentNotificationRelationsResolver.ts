import * as TypeGraphQL from "type-graphql";
import { Student } from "../../../models/Student";
import { StudentNotification } from "../../../models/StudentNotification";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudentNotification)
export class StudentNotificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: false
  })
  async student(@TypeGraphQL.Root() studentNotification: StudentNotification, @TypeGraphQL.Ctx() ctx: any): Promise<Student> {
    return getPrismaFromContext(ctx).studentNotification.findUnique({
      where: {
        id: studentNotification.id,
      },
    }).student({});
  }
}
