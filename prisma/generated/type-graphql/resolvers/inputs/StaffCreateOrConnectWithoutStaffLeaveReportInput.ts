import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStaffLeaveReportInput } from "../inputs/StaffCreateWithoutStaffLeaveReportInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutStaffLeaveReportInput", {
  isAbstract: true
})
export class StaffCreateOrConnectWithoutStaffLeaveReportInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffLeaveReportInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStaffLeaveReportInput;
}
