import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationCreateManyStaffInputEnvelope } from "../inputs/StaffNotificationCreateManyStaffInputEnvelope";
import { StaffNotificationCreateOrConnectWithoutStaffInput } from "../inputs/StaffNotificationCreateOrConnectWithoutStaffInput";
import { StaffNotificationCreateWithoutStaffInput } from "../inputs/StaffNotificationCreateWithoutStaffInput";
import { StaffNotificationScalarWhereInput } from "../inputs/StaffNotificationScalarWhereInput";
import { StaffNotificationUpdateManyWithWhereWithoutStaffInput } from "../inputs/StaffNotificationUpdateManyWithWhereWithoutStaffInput";
import { StaffNotificationUpdateWithWhereUniqueWithoutStaffInput } from "../inputs/StaffNotificationUpdateWithWhereUniqueWithoutStaffInput";
import { StaffNotificationUpsertWithWhereUniqueWithoutStaffInput } from "../inputs/StaffNotificationUpsertWithWhereUniqueWithoutStaffInput";
import { StaffNotificationWhereUniqueInput } from "../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StaffNotificationUpdateManyWithoutStaffInput", {
  isAbstract: true
})
export class StaffNotificationUpdateManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [StaffNotificationCreateWithoutStaffInput], {
    nullable: true
  })
  create?: StaffNotificationCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: StaffNotificationCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationUpsertWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  upsert?: StaffNotificationUpsertWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: StaffNotificationCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereUniqueInput], {
    nullable: true
  })
  set?: StaffNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StaffNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: StaffNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationUpdateWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  update?: StaffNotificationUpdateWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationUpdateManyWithWhereWithoutStaffInput], {
    nullable: true
  })
  updateMany?: StaffNotificationUpdateManyWithWhereWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StaffNotificationScalarWhereInput[] | undefined;
}
