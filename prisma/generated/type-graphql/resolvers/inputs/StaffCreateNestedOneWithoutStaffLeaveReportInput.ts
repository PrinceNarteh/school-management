import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutStaffLeaveReportInput } from "../inputs/StaffCreateOrConnectWithoutStaffLeaveReportInput";
import { StaffCreateWithoutStaffLeaveReportInput } from "../inputs/StaffCreateWithoutStaffLeaveReportInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateNestedOneWithoutStaffLeaveReportInput", {
  isAbstract: true
})
export class StaffCreateNestedOneWithoutStaffLeaveReportInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffLeaveReportInput, {
    nullable: true
  })
  create?: StaffCreateWithoutStaffLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutStaffLeaveReportInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStaffLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;
}
