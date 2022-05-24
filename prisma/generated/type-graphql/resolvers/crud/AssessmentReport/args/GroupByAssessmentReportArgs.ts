import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportOrderByWithAggregationInput } from "../../../inputs/AssessmentReportOrderByWithAggregationInput";
import { AssessmentReportScalarWhereWithAggregatesInput } from "../../../inputs/AssessmentReportScalarWhereWithAggregatesInput";
import { AssessmentReportWhereInput } from "../../../inputs/AssessmentReportWhereInput";
import { AssessmentReportScalarFieldEnum } from "../../../../enums/AssessmentReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  where?: AssessmentReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AssessmentReportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "status" | "studentId" | "assessmentId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => AssessmentReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AssessmentReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
