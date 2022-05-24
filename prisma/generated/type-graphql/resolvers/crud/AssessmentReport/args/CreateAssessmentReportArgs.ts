import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportCreateInput } from "../../../inputs/AssessmentReportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportCreateInput, {
    nullable: false
  })
  data!: AssessmentReportCreateInput;
}
