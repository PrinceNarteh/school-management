import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutCourseInput } from "../inputs/SubjectCreateWithoutCourseInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateOrConnectWithoutCourseInput", {
  isAbstract: true
})
export class SubjectCreateOrConnectWithoutCourseInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutCourseInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutCourseInput;
}
