import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StaffNotificationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StaffNotificationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StaffNotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StaffNotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StaffNotificationScalarWhereWithAggregatesInput[] | undefined;

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
