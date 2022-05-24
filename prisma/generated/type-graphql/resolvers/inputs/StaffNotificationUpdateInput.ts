import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StaffUpdateOneRequiredWithoutStaffNotificationInput } from "../inputs/StaffUpdateOneRequiredWithoutStaffNotificationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("StaffNotificationUpdateInput", {
  isAbstract: true
})
export class StaffNotificationUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateOneRequiredWithoutStaffNotificationInput, {
    nullable: true
  })
  staff?: StaffUpdateOneRequiredWithoutStaffNotificationInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
