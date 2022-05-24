import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentUpdateManyWithoutSubjectInput } from "../inputs/AssessmentUpdateManyWithoutSubjectInput";
import { CourseUpdateOneRequiredWithoutSubjectsInput } from "../inputs/CourseUpdateOneRequiredWithoutSubjectsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubjectUpdateWithoutStaffInput", {
  isAbstract: true
})
export class SubjectUpdateWithoutStaffInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutSubjectsInput, {
    nullable: true
  })
  course?: CourseUpdateOneRequiredWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentUpdateManyWithoutSubjectInput, {
    nullable: true
  })
  assessment?: AssessmentUpdateManyWithoutSubjectInput | undefined;
}
