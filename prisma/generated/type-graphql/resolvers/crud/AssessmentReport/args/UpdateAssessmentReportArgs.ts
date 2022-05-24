import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportUpdateInput } from "../../../inputs/AssessmentReportUpdateInput";
import { AssessmentReportWhereUniqueInput } from "../../../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportUpdateInput, {
    nullable: false
  })
  data!: AssessmentReportUpdateInput;

  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;
}
