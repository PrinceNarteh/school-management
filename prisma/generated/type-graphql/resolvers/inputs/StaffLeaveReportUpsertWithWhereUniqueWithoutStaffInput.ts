import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportCreateWithoutStaffInput } from "../inputs/StaffLeaveReportCreateWithoutStaffInput";
import { StaffLeaveReportUpdateWithoutStaffInput } from "../inputs/StaffLeaveReportUpdateWithoutStaffInput";
import { StaffLeaveReportWhereUniqueInput } from "../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StaffLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateWithoutStaffInput, {
    nullable: false
  })
  update!: StaffLeaveReportUpdateWithoutStaffInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportCreateWithoutStaffInput, {
    nullable: false
  })
  create!: StaffLeaveReportCreateWithoutStaffInput;
}
