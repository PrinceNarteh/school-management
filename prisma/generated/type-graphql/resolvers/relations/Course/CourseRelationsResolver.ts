import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { Subject } from "../../../models/Subject";
import { CourseSubjectsArgs } from "./args/CourseSubjectsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Course)
export class CourseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subject], {
    nullable: false
  })
  async subjects(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseSubjectsArgs): Promise<Subject[]> {
    return getPrismaFromContext(ctx).course.findUnique({
      where: {
        id: course.id,
      },
    }).subjects(args);
  }
}
