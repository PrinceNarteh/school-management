import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutAssessmentReportInput } from "../inputs/StudentCreateWithoutAssessmentReportInput";
import { StudentUpdateWithoutAssessmentReportInput } from "../inputs/StudentUpdateWithoutAssessmentReportInput";

@TypeGraphQL.InputType("StudentUpsertWithoutAssessmentReportInput", {
  isAbstract: true
})
export class StudentUpsertWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutAssessmentReportInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutAssessmentReportInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentReportInput, {
    nullable: false
  })
  create!: StudentCreateWithoutAssessmentReportInput;
}
