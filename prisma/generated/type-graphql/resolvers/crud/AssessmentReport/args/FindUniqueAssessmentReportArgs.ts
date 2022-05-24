import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportWhereUniqueInput } from "../../../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;
}
