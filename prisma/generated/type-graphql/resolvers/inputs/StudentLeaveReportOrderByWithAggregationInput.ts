import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportAvgOrderByAggregateInput } from "../inputs/StudentLeaveReportAvgOrderByAggregateInput";
import { StudentLeaveReportCountOrderByAggregateInput } from "../inputs/StudentLeaveReportCountOrderByAggregateInput";
import { StudentLeaveReportMaxOrderByAggregateInput } from "../inputs/StudentLeaveReportMaxOrderByAggregateInput";
import { StudentLeaveReportMinOrderByAggregateInput } from "../inputs/StudentLeaveReportMinOrderByAggregateInput";
import { StudentLeaveReportSumOrderByAggregateInput } from "../inputs/StudentLeaveReportSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StudentLeaveReportOrderByWithAggregationInput", {
  isAbstract: true
})
export class StudentLeaveReportOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studentId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => StudentLeaveReportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StudentLeaveReportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StudentLeaveReportAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StudentLeaveReportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StudentLeaveReportMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StudentLeaveReportSumOrderByAggregateInput | undefined;
}
