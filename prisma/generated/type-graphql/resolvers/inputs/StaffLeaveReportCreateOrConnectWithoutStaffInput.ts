import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportCreateWithoutStaffInput } from "../inputs/StaffLeaveReportCreateWithoutStaffInput";
import { StaffLeaveReportWhereUniqueInput } from "../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StaffLeaveReportCreateOrConnectWithoutStaffInput", {
  isAbstract: true
})
export class StaffLeaveReportCreateOrConnectWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StaffLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportCreateWithoutStaffInput, {
    nullable: false
  })
  create!: StaffLeaveReportCreateWithoutStaffInput;
}
