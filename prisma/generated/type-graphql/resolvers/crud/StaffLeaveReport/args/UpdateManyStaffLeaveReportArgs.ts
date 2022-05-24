import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportUpdateManyMutationInput } from "../../../inputs/StaffLeaveReportUpdateManyMutationInput";
import { StaffLeaveReportWhereInput } from "../../../inputs/StaffLeaveReportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffLeaveReportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  where?: StaffLeaveReportWhereInput | undefined;
}
