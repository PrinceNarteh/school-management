import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectScalarWhereInput } from "../inputs/SubjectScalarWhereInput";
import { SubjectUpdateManyMutationInput } from "../inputs/SubjectUpdateManyMutationInput";

@TypeGraphQL.InputType("SubjectUpdateManyWithWhereWithoutCourseInput", {
  isAbstract: true
})
export class SubjectUpdateManyWithWhereWithoutCourseInput {
  @TypeGraphQL.Field(_type => SubjectScalarWhereInput, {
    nullable: false
  })
  where!: SubjectScalarWhereInput;

  @TypeGraphQL.Field(_type => SubjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubjectUpdateManyMutationInput;
}
