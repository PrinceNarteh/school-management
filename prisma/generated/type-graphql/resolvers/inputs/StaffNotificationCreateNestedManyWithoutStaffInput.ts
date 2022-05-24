import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationCreateManyStaffInputEnvelope } from "../inputs/StaffNotificationCreateManyStaffInputEnvelope";
import { StaffNotificationCreateOrConnectWithoutStaffInput } from "../inputs/StaffNotificationCreateOrConnectWithoutStaffInput";
import { StaffNotificationCreateWithoutStaffInput } from "../inputs/StaffNotificationCreateWithoutStaffInput";
import { StaffNotificationWhereUniqueInput } from "../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StaffNotificationCreateNestedManyWithoutStaffInput", {
  isAbstract: true
})
export class StaffNotificationCreateNestedManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [StaffNotificationCreateWithoutStaffInput], {
    nullable: true
  })
  create?: StaffNotificationCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: StaffNotificationCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: StaffNotificationCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffNotificationWhereUniqueInput[] | undefined;
}
