import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportUpdateManyMutationInput } from "../../../inputs/StudentLeaveReportUpdateManyMutationInput";
import { StudentLeaveReportWhereInput } from "../../../inputs/StudentLeaveReportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentLeaveReportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  where?: StudentLeaveReportWhereInput | undefined;
}
