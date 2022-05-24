import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportWhereInput } from "../../../inputs/StaffLeaveReportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  where?: StaffLeaveReportWhereInput | undefined;
}
