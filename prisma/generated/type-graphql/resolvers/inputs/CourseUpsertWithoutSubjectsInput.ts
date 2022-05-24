import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutSubjectsInput } from "../inputs/CourseCreateWithoutSubjectsInput";
import { CourseUpdateWithoutSubjectsInput } from "../inputs/CourseUpdateWithoutSubjectsInput";

@TypeGraphQL.InputType("CourseUpsertWithoutSubjectsInput", {
  isAbstract: true
})
export class CourseUpsertWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutSubjectsInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutSubjectsInput;
}
