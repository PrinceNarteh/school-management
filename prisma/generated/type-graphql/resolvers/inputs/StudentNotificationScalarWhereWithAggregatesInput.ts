import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StudentNotificationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StudentNotificationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StudentNotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StudentNotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StudentNotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StudentNotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  studentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
