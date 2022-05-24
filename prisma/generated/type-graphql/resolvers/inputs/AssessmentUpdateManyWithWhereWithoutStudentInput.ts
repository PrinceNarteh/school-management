import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentScalarWhereInput } from "../inputs/AssessmentScalarWhereInput";
import { AssessmentUpdateManyMutationInput } from "../inputs/AssessmentUpdateManyMutationInput";

@TypeGraphQL.InputType("AssessmentUpdateManyWithWhereWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentUpdateManyWithWhereWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentScalarWhereInput, {
    nullable: false
  })
  where!: AssessmentScalarWhereInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssessmentUpdateManyMutationInput;
}
