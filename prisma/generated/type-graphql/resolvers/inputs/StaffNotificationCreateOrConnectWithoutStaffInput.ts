import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationCreateWithoutStaffInput } from "../inputs/StaffNotificationCreateWithoutStaffInput";
import { StaffNotificationWhereUniqueInput } from "../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StaffNotificationCreateOrConnectWithoutStaffInput", {
  isAbstract: true
})
export class StaffNotificationCreateOrConnectWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StaffNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffNotificationCreateWithoutStaffInput, {
    nullable: false
  })
  create!: StaffNotificationCreateWithoutStaffInput;
}
