import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportWhereUniqueInput } from "../../../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StaffLeaveReportWhereUniqueInput;
}
