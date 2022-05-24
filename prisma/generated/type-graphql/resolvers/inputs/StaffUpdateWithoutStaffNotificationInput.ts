import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumGenderFieldUpdateOperationsInput } from "../inputs/EnumGenderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StaffFeedbackUpdateManyWithoutStaffInput } from "../inputs/StaffFeedbackUpdateManyWithoutStaffInput";
import { StaffLeaveReportUpdateManyWithoutStaffInput } from "../inputs/StaffLeaveReportUpdateManyWithoutStaffInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubjectUpdateManyWithoutStaffInput } from "../inputs/SubjectUpdateManyWithoutStaffInput";

@TypeGraphQL.InputType("StaffUpdateWithoutStaffNotificationInput", {
  isAbstract: true
})
export class StaffUpdateWithoutStaffNotificationInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SubjectUpdateManyWithoutStaffInput, {
    nullable: true
  })
  subjects?: SubjectUpdateManyWithoutStaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateManyWithoutStaffInput, {
    nullable: true
  })
  staffLeaveReport?: StaffLeaveReportUpdateManyWithoutStaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackUpdateManyWithoutStaffInput, {
    nullable: true
  })
  staffFeedback?: StaffFeedbackUpdateManyWithoutStaffInput | undefined;
}
