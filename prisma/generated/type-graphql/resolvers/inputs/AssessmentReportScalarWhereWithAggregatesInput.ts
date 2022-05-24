import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AssessmentReportScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AssessmentReportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AssessmentReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AssessmentReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AssessmentReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  status?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  studentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  assessmentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
