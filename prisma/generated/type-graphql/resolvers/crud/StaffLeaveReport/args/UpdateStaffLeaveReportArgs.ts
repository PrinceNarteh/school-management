import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportUpdateInput } from "../../../inputs/StaffLeaveReportUpdateInput";
import { StaffLeaveReportWhereUniqueInput } from "../../../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateInput, {
    nullable: false
  })
  data!: StaffLeaveReportUpdateInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StaffLeaveReportWhereUniqueInput;
}
