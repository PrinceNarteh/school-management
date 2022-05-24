import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportCreateManyStaffInputEnvelope } from "../inputs/StaffLeaveReportCreateManyStaffInputEnvelope";
import { StaffLeaveReportCreateOrConnectWithoutStaffInput } from "../inputs/StaffLeaveReportCreateOrConnectWithoutStaffInput";
import { StaffLeaveReportCreateWithoutStaffInput } from "../inputs/StaffLeaveReportCreateWithoutStaffInput";
import { StaffLeaveReportWhereUniqueInput } from "../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StaffLeaveReportCreateNestedManyWithoutStaffInput", {
  isAbstract: true
})
export class StaffLeaveReportCreateNestedManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [StaffLeaveReportCreateWithoutStaffInput], {
    nullable: true
  })
  create?: StaffLeaveReportCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: StaffLeaveReportCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: StaffLeaveReportCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffLeaveReportWhereUniqueInput[] | undefined;
}
