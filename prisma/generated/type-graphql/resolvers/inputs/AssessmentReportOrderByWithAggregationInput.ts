import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportAvgOrderByAggregateInput } from "../inputs/AssessmentReportAvgOrderByAggregateInput";
import { AssessmentReportCountOrderByAggregateInput } from "../inputs/AssessmentReportCountOrderByAggregateInput";
import { AssessmentReportMaxOrderByAggregateInput } from "../inputs/AssessmentReportMaxOrderByAggregateInput";
import { AssessmentReportMinOrderByAggregateInput } from "../inputs/AssessmentReportMinOrderByAggregateInput";
import { AssessmentReportSumOrderByAggregateInput } from "../inputs/AssessmentReportSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AssessmentReportOrderByWithAggregationInput", {
  isAbstract: true
})
export class AssessmentReportOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assessmentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AssessmentReportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AssessmentReportAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AssessmentReportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AssessmentReportMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AssessmentReportSumOrderByAggregateInput | undefined;
}
