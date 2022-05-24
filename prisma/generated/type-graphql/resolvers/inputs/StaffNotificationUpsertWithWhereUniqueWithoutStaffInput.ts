import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationCreateWithoutStaffInput } from "../inputs/StaffNotificationCreateWithoutStaffInput";
import { StaffNotificationUpdateWithoutStaffInput } from "../inputs/StaffNotificationUpdateWithoutStaffInput";
import { StaffNotificationWhereUniqueInput } from "../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StaffNotificationUpsertWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class StaffNotificationUpsertWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StaffNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffNotificationUpdateWithoutStaffInput, {
    nullable: false
  })
  update!: StaffNotificationUpdateWithoutStaffInput;

  @TypeGraphQL.Field(_type => StaffNotificationCreateWithoutStaffInput, {
    nullable: false
  })
  create!: StaffNotificationCreateWithoutStaffInput;
}
