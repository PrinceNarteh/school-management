import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportUpdateManyWithoutStudentInput } from "../inputs/AssessmentReportUpdateManyWithoutStudentInput";
import { AssessmentUpdateManyWithoutStudentInput } from "../inputs/AssessmentUpdateManyWithoutStudentInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAdmissionStatusFieldUpdateOperationsInput } from "../inputs/EnumAdmissionStatusFieldUpdateOperationsInput";
import { EnumGenderFieldUpdateOperationsInput } from "../inputs/EnumGenderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentFeedbackUpdateManyWithoutStudentInput } from "../inputs/StudentFeedbackUpdateManyWithoutStudentInput";
import { StudentLeaveReportUpdateManyWithoutStudentInput } from "../inputs/StudentLeaveReportUpdateManyWithoutStudentInput";
import { StudentNotificationUpdateManyWithoutStudentInput } from "../inputs/StudentNotificationUpdateManyWithoutStudentInput";

@TypeGraphQL.InputType("StudentUpdateInput", {
  isAbstract: true
})
export class StudentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  middleName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumGenderFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: EnumGenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dateOfBirth?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  profilePic?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAdmissionStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  admissionStatus?: EnumAdmissionStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationUpdateManyWithoutStudentInput, {
    nullable: true
  })
  notifications?: StudentNotificationUpdateManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentUpdateManyWithoutStudentInput, {
    nullable: true
  })
  assessment?: AssessmentUpdateManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateManyWithoutStudentInput, {
    nullable: true
  })
  assessmentReport?: AssessmentReportUpdateManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateManyWithoutStudentInput, {
    nullable: true
  })
  studentLeaveReport?: StudentLeaveReportUpdateManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackUpdateManyWithoutStudentInput, {
    nullable: true
  })
  studentFeedback?: StudentFeedbackUpdateManyWithoutStudentInput | undefined;
}
