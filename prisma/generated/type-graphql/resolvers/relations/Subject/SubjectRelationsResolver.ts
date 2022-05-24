import * as TypeGraphQL from "type-graphql";
import { Assessment } from "../../../models/Assessment";
import { Course } from "../../../models/Course";
import { Staff } from "../../../models/Staff";
import { Subject } from "../../../models/Subject";
import { SubjectAssessmentArgs } from "./args/SubjectAssessmentArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subject)
export class SubjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: false
  })
  async course(@TypeGraphQL.Root() subject: Subject, @TypeGraphQL.Ctx() ctx: any): Promise<Course> {
    return getPrismaFromContext(ctx).subject.findUnique({
      where: {
        id: subject.id,
      },
    }).course({});
  }

  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() subject: Subject, @TypeGraphQL.Ctx() ctx: any): Promise<Staff> {
    return getPrismaFromContext(ctx).subject.findUnique({
      where: {
        id: subject.id,
      },
    }).staff({});
  }

  @TypeGraphQL.FieldResolver(_type => [Assessment], {
    nullable: false
  })
  async assessment(@TypeGraphQL.Root() subject: Subject, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SubjectAssessmentArgs): Promise<Assessment[]> {
    return getPrismaFromContext(ctx).subject.findUnique({
      where: {
        id: subject.id,
      },
    }).assessment(args);
  }
}
