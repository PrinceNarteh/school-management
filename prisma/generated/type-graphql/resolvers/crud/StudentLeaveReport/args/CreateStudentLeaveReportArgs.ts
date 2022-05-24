import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportCreateInput } from "../../../inputs/StudentLeaveReportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportCreateInput, {
    nullable: false
  })
  data!: StudentLeaveReportCreateInput;
}
