import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportWhereInput } from "../../../inputs/StudentLeaveReportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  where?: StudentLeaveReportWhereInput | undefined;
}
