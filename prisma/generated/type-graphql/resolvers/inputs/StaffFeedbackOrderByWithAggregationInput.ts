import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackAvgOrderByAggregateInput } from "../inputs/StaffFeedbackAvgOrderByAggregateInput";
import { StaffFeedbackCountOrderByAggregateInput } from "../inputs/StaffFeedbackCountOrderByAggregateInput";
import { StaffFeedbackMaxOrderByAggregateInput } from "../inputs/StaffFeedbackMaxOrderByAggregateInput";
import { StaffFeedbackMinOrderByAggregateInput } from "../inputs/StaffFeedbackMinOrderByAggregateInput";
import { StaffFeedbackSumOrderByAggregateInput } from "../inputs/StaffFeedbackSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StaffFeedbackOrderByWithAggregationInput", {
  isAbstract: true
})
export class StaffFeedbackOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => StaffFeedbackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StaffFeedbackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StaffFeedbackAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StaffFeedbackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StaffFeedbackMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StaffFeedbackSumOrderByAggregateInput | undefined;
}
