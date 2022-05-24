import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportCreateManyStaffInputEnvelope } from "../inputs/StaffLeaveReportCreateManyStaffInputEnvelope";
import { StaffLeaveReportCreateOrConnectWithoutStaffInput } from "../inputs/StaffLeaveReportCreateOrConnectWithoutStaffInput";
import { StaffLeaveReportCreateWithoutStaffInput } from "../inputs/StaffLeaveReportCreateWithoutStaffInput";
import { StaffLeaveReportScalarWhereInput } from "../inputs/StaffLeaveReportScalarWhereInput";
import { StaffLeaveReportUpdateManyWithWhereWithoutStaffInput } from "../inputs/StaffLeaveReportUpdateManyWithWhereWithoutStaffInput";
import { StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput } from "../inputs/StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput";
import { StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput } from "../inputs/StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput";
import { StaffLeaveReportWhereUniqueInput } from "../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StaffLeaveReportUpdateManyWithoutStaffInput", {
  isAbstract: true
})
export class StaffLeaveReportUpdateManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [StaffLeaveReportCreateWithoutStaffInput], {
    nullable: true
  })
  create?: StaffLeaveReportCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: StaffLeaveReportCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  upsert?: StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: StaffLeaveReportCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereUniqueInput], {
    nullable: true
  })
  set?: StaffLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StaffLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereUniqueInput], {
    nullable: true
  })
  delete?: StaffLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  update?: StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportUpdateManyWithWhereWithoutStaffInput], {
    nullable: true
  })
  updateMany?: StaffLeaveReportUpdateManyWithWhereWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StaffLeaveReportScalarWhereInput[] | undefined;
}
