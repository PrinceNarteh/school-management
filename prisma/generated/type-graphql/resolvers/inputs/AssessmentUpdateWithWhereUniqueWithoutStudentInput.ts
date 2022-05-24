import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentUpdateWithoutStudentInput } from "../inputs/AssessmentUpdateWithoutStudentInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: AssessmentUpdateWithoutStudentInput;
}
