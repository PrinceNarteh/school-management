import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutSubjectsInput } from "../inputs/CourseCreateWithoutSubjectsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutSubjectsInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutSubjectsInput;
}
