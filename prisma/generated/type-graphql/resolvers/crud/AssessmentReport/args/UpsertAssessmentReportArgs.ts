import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportCreateInput } from "../../../inputs/AssessmentReportCreateInput";
import { AssessmentReportUpdateInput } from "../../../inputs/AssessmentReportUpdateInput";
import { AssessmentReportWhereUniqueInput } from "../../../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportCreateInput, {
    nullable: false
  })
  create!: AssessmentReportCreateInput;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateInput, {
    nullable: false
  })
  update!: AssessmentReportUpdateInput;
}
