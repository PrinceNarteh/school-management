import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportUpdateManyWithoutAssessmentInput } from "../inputs/AssessmentReportUpdateManyWithoutAssessmentInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StudentUpdateOneRequiredWithoutAssessmentInput } from "../inputs/StudentUpdateOneRequiredWithoutAssessmentInput";

@TypeGraphQL.InputType("AssessmentUpdateWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentUpdateWithoutSubjectInput {
  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutAssessmentInput, {
    nullable: true
  })
  student?: StudentUpdateOneRequiredWithoutAssessmentInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateManyWithoutAssessmentInput, {
    nullable: true
  })
  assessmentReport?: AssessmentReportUpdateManyWithoutAssessmentInput | undefined;
}
