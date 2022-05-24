import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutStaffNotificationInput } from "../inputs/StaffCreateOrConnectWithoutStaffNotificationInput";
import { StaffCreateWithoutStaffNotificationInput } from "../inputs/StaffCreateWithoutStaffNotificationInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateNestedOneWithoutStaffNotificationInput", {
  isAbstract: true
})
export class StaffCreateNestedOneWithoutStaffNotificationInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffNotificationInput, {
    nullable: true
  })
  create?: StaffCreateWithoutStaffNotificationInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutStaffNotificationInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStaffNotificationInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;
}
