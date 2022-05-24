import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportScalarWhereInput } from "../inputs/AssessmentReportScalarWhereInput";
import { AssessmentReportUpdateManyMutationInput } from "../inputs/AssessmentReportUpdateManyMutationInput";

@TypeGraphQL.InputType("AssessmentReportUpdateManyWithWhereWithoutAssessmentInput", {
  isAbstract: true
})
export class AssessmentReportUpdateManyWithWhereWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => AssessmentReportScalarWhereInput, {
    nullable: false
  })
  where!: AssessmentReportScalarWhereInput;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssessmentReportUpdateManyMutationInput;
}