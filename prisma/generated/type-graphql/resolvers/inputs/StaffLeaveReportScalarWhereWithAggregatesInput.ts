import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StaffLeaveReportScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StaffLeaveReportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StaffLeaveReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StaffLeaveReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StaffLeaveReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  staffId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  status?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
