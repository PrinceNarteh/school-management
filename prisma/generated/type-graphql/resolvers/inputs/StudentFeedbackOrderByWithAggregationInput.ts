import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackAvgOrderByAggregateInput } from "../inputs/StudentFeedbackAvgOrderByAggregateInput";
import { StudentFeedbackCountOrderByAggregateInput } from "../inputs/StudentFeedbackCountOrderByAggregateInput";
import { StudentFeedbackMaxOrderByAggregateInput } from "../inputs/StudentFeedbackMaxOrderByAggregateInput";
import { StudentFeedbackMinOrderByAggregateInput } from "../inputs/StudentFeedbackMinOrderByAggregateInput";
import { StudentFeedbackSumOrderByAggregateInput } from "../inputs/StudentFeedbackSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StudentFeedbackOrderByWithAggregationInput", {
  isAbstract: true
})
export class StudentFeedbackOrderByWithAggregationInput {
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
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reply?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StudentFeedbackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StudentFeedbackAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StudentFeedbackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StudentFeedbackMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StudentFeedbackSumOrderByAggregateInput | undefined;
}
