import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportWhereUniqueInput } from "../../../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StudentLeaveReportWhereUniqueInput;
}
