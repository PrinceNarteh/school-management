import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportCreateInput } from "../../../inputs/StaffLeaveReportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportCreateInput, {
    nullable: false
  })
  data!: StaffLeaveReportCreateInput;
}
