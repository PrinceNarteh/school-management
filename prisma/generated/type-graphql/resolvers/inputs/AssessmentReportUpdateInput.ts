import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentUpdateOneRequiredWithoutAssessmentReportInput } from "../inputs/AssessmentUpdateOneRequiredWithoutAssessmentReportInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateOneRequiredWithoutAssessmentReportInput } from "../inputs/StudentUpdateOneRequiredWithoutAssessmentReportInput";

@TypeGraphQL.InputType("AssessmentReportUpdateInput", {
  isAbstract: true
})
export class AssessmentReportUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutAssessmentReportInput, {
    nullable: true
  })
  student?: StudentUpdateOneRequiredWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentUpdateOneRequiredWithoutAssessmentReportInput, {
    nullable: true
  })
  assessment?: AssessmentUpdateOneRequiredWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
