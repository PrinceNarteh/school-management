import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportScalarWhereInput } from "../inputs/StaffLeaveReportScalarWhereInput";
import { StaffLeaveReportUpdateManyMutationInput } from "../inputs/StaffLeaveReportUpdateManyMutationInput";

@TypeGraphQL.InputType("StaffLeaveReportUpdateManyWithWhereWithoutStaffInput", {
  isAbstract: true
})
export class StaffLeaveReportUpdateManyWithWhereWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffLeaveReportScalarWhereInput, {
    nullable: false
  })
  where!: StaffLeaveReportScalarWhereInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffLeaveReportUpdateManyMutationInput;
}
