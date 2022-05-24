import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportCreateInput } from "../../../inputs/StudentLeaveReportCreateInput";
import { StudentLeaveReportUpdateInput } from "../../../inputs/StudentLeaveReportUpdateInput";
import { StudentLeaveReportWhereUniqueInput } from "../../../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StudentLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportCreateInput, {
    nullable: false
  })
  create!: StudentLeaveReportCreateInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateInput, {
    nullable: false
  })
  update!: StudentLeaveReportUpdateInput;
}
