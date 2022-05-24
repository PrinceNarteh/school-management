import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportAvgOrderByAggregateInput } from "../inputs/StaffLeaveReportAvgOrderByAggregateInput";
import { StaffLeaveReportCountOrderByAggregateInput } from "../inputs/StaffLeaveReportCountOrderByAggregateInput";
import { StaffLeaveReportMaxOrderByAggregateInput } from "../inputs/StaffLeaveReportMaxOrderByAggregateInput";
import { StaffLeaveReportMinOrderByAggregateInput } from "../inputs/StaffLeaveReportMinOrderByAggregateInput";
import { StaffLeaveReportSumOrderByAggregateInput } from "../inputs/StaffLeaveReportSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StaffLeaveReportOrderByWithAggregationInput", {
  isAbstract: true
})
export class StaffLeaveReportOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staffId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StaffLeaveReportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StaffLeaveReportAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StaffLeaveReportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StaffLeaveReportMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StaffLeaveReportSumOrderByAggregateInput | undefined;
}
