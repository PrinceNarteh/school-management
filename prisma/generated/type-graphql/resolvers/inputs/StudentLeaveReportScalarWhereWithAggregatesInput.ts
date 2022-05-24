import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StudentLeaveReportScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StudentLeaveReportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StudentLeaveReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StudentLeaveReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StudentLeaveReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  studentId?: IntWithAggregatesFilter | undefined;

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
