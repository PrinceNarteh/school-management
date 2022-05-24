import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutStaffNotificationInput } from "../inputs/StaffCreateOrConnectWithoutStaffNotificationInput";
import { StaffCreateWithoutStaffNotificationInput } from "../inputs/StaffCreateWithoutStaffNotificationInput";
import { StaffUpdateWithoutStaffNotificationInput } from "../inputs/StaffUpdateWithoutStaffNotificationInput";
import { StaffUpsertWithoutStaffNotificationInput } from "../inputs/StaffUpsertWithoutStaffNotificationInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateOneRequiredWithoutStaffNotificationInput", {
  isAbstract: true
})
export class StaffUpdateOneRequiredWithoutStaffNotificationInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffNotificationInput, {
    nullable: true
  })
  create?: StaffCreateWithoutStaffNotificationInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutStaffNotificationInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStaffNotificationInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpsertWithoutStaffNotificationInput, {
    nullable: true
  })
  upsert?: StaffUpsertWithoutStaffNotificationInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutStaffNotificationInput, {
    nullable: true
  })
  update?: StaffUpdateWithoutStaffNotificationInput | undefined;
}
