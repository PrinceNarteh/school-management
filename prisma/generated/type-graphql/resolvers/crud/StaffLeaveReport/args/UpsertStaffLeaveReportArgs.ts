import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportCreateInput } from "../../../inputs/StaffLeaveReportCreateInput";
import { StaffLeaveReportUpdateInput } from "../../../inputs/StaffLeaveReportUpdateInput";
import { StaffLeaveReportWhereUniqueInput } from "../../../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StaffLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportCreateInput, {
    nullable: false
  })
  create!: StaffLeaveReportCreateInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateInput, {
    nullable: false
  })
  update!: StaffLeaveReportUpdateInput;
}
