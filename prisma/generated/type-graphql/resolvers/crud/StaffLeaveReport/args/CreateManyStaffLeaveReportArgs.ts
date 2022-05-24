import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportCreateManyInput } from "../../../inputs/StaffLeaveReportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => [StaffLeaveReportCreateManyInput], {
    nullable: false
  })
  data!: StaffLeaveReportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
