import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutCourseInput } from "../inputs/SubjectCreateWithoutCourseInput";
import { SubjectUpdateWithoutCourseInput } from "../inputs/SubjectUpdateWithoutCourseInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpsertWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class SubjectUpsertWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutCourseInput, {
    nullable: false
  })
  update!: SubjectUpdateWithoutCourseInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutCourseInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutCourseInput;
}
