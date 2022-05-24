import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStaffNotificationInput } from "../inputs/StaffCreateWithoutStaffNotificationInput";
import { StaffUpdateWithoutStaffNotificationInput } from "../inputs/StaffUpdateWithoutStaffNotificationInput";

@TypeGraphQL.InputType("StaffUpsertWithoutStaffNotificationInput", {
  isAbstract: true
})
export class StaffUpsertWithoutStaffNotificationInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutStaffNotificationInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutStaffNotificationInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffNotificationInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStaffNotificationInput;
}
