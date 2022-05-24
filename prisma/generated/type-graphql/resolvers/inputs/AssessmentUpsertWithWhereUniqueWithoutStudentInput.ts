import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateWithoutStudentInput } from "../inputs/AssessmentCreateWithoutStudentInput";
import { AssessmentUpdateWithoutStudentInput } from "../inputs/AssessmentUpdateWithoutStudentInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpsertWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: AssessmentUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => AssessmentCreateWithoutStudentInput, {
    nullable: false
  })
  create!: AssessmentCreateWithoutStudentInput;
}
