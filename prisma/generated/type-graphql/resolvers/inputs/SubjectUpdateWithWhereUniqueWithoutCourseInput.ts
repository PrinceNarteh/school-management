import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectUpdateWithoutCourseInput } from "../inputs/SubjectUpdateWithoutCourseInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class SubjectUpdateWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutCourseInput, {
    nullable: false
  })
  data!: SubjectUpdateWithoutCourseInput;
}
