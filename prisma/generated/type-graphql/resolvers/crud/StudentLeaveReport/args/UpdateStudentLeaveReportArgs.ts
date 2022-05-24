import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportUpdateInput } from "../../../inputs/StudentLeaveReportUpdateInput";
import { StudentLeaveReportWhereUniqueInput } from "../../../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateInput, {
    nullable: false
  })
  data!: StudentLeaveReportUpdateInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StudentLeaveReportWhereUniqueInput;
}
