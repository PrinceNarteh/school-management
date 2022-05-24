import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportUpdateWithoutStaffInput } from "../inputs/StaffLeaveReportUpdateWithoutStaffInput";
import { StaffLeaveReportWhereUniqueInput } from "../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StaffLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: StaffLeaveReportUpdateWithoutStaffInput;
}
