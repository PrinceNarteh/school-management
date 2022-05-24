import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentScalarWhereInput } from "../inputs/AssessmentScalarWhereInput";
import { AssessmentUpdateManyMutationInput } from "../inputs/AssessmentUpdateManyMutationInput";

@TypeGraphQL.InputType("AssessmentUpdateManyWithWhereWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentUpdateManyWithWhereWithoutSubjectInput {
  @TypeGraphQL.Field(_type => AssessmentScalarWhereInput, {
    nullable: false
  })
  where!: AssessmentScalarWhereInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssessmentUpdateManyMutationInput;
}
