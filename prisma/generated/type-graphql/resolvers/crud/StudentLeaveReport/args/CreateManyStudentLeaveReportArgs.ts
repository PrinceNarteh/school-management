import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportCreateManyInput } from "../../../inputs/StudentLeaveReportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => [StudentLeaveReportCreateManyInput], {
    nullable: false
  })
  data!: StudentLeaveReportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
