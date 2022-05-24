import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SubjectScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SubjectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  courseId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  staffId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
