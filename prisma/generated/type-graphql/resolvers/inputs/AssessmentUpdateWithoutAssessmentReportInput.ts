import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StudentUpdateOneRequiredWithoutAssessmentInput } from "../inputs/StudentUpdateOneRequiredWithoutAssessmentInput";
import { SubjectUpdateOneRequiredWithoutAssessmentInput } from "../inputs/SubjectUpdateOneRequiredWithoutAssessmentInput";

@TypeGraphQL.InputType("AssessmentUpdateWithoutAssessmentReportInput", {
  isAbstract: true
})
export class AssessmentUpdateWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutAssessmentInput, {
    nullable: true
  })
  student?: StudentUpdateOneRequiredWithoutAssessmentInput | undefined;

  @TypeGraphQL.Field(_type => SubjectUpdateOneRequiredWithoutAssessmentInput, {
    nullable: true
  })
  subject?: SubjectUpdateOneRequiredWithoutAssessmentInput | undefined;

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
}
