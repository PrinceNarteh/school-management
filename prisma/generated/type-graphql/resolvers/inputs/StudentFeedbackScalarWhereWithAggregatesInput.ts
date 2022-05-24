import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StudentFeedbackScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StudentFeedbackScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StudentFeedbackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StudentFeedbackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StudentFeedbackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  studentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reply?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
