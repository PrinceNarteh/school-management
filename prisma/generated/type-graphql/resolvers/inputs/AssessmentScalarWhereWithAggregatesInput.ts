import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("AssessmentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AssessmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AssessmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AssessmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AssessmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AssessmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  studentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  subjectId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
