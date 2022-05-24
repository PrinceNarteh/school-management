import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStaffLeaveReportInput } from "../inputs/StaffCreateWithoutStaffLeaveReportInput";
import { StaffUpdateWithoutStaffLeaveReportInput } from "../inputs/StaffUpdateWithoutStaffLeaveReportInput";

@TypeGraphQL.InputType("StaffUpsertWithoutStaffLeaveReportInput", {
  isAbstract: true
})
export class StaffUpsertWithoutStaffLeaveReportInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutStaffLeaveReportInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutStaffLeaveReportInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffLeaveReportInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStaffLeaveReportInput;
}
