import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutSubjectsInput } from "../inputs/CourseUpdateOneRequiredWithoutSubjectsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StaffUpdateOneRequiredWithoutSubjectsInput } from "../inputs/StaffUpdateOneRequiredWithoutSubjectsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubjectUpdateWithoutAssessmentInput", {
  isAbstract: true
})
export class SubjectUpdateWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutSubjectsInput, {
    nullable: true
  })
  course?: CourseUpdateOneRequiredWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateOneRequiredWithoutSubjectsInput, {
    nullable: true
  })
  staff?: StaffUpdateOneRequiredWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
