import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutSubjectsInput } from "../inputs/CourseCreateOrConnectWithoutSubjectsInput";
import { CourseCreateWithoutSubjectsInput } from "../inputs/CourseCreateWithoutSubjectsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutSubjectsInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutSubjectsInput, {
    nullable: true
  })
  create?: CourseCreateWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutSubjectsInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
