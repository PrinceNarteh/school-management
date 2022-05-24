import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateWithoutAssessmentReportInput } from "../inputs/AssessmentCreateWithoutAssessmentReportInput";
import { AssessmentUpdateWithoutAssessmentReportInput } from "../inputs/AssessmentUpdateWithoutAssessmentReportInput";

@TypeGraphQL.InputType("AssessmentUpsertWithoutAssessmentReportInput", {
  isAbstract: true
})
export class AssessmentUpsertWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => AssessmentUpdateWithoutAssessmentReportInput, {
    nullable: false
  })
  update!: AssessmentUpdateWithoutAssessmentReportInput;

  @TypeGraphQL.Field(_type => AssessmentCreateWithoutAssessmentReportInput, {
    nullable: false
  })
  create!: AssessmentCreateWithoutAssessmentReportInput;
}
