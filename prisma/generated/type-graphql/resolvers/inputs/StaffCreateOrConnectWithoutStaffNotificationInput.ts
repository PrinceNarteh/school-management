import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStaffNotificationInput } from "../inputs/StaffCreateWithoutStaffNotificationInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutStaffNotificationInput", {
  isAbstract: true
})
export class StaffCreateOrConnectWithoutStaffNotificationInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffNotificationInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStaffNotificationInput;
}
