import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationAvgOrderByAggregateInput } from "../inputs/StudentNotificationAvgOrderByAggregateInput";
import { StudentNotificationCountOrderByAggregateInput } from "../inputs/StudentNotificationCountOrderByAggregateInput";
import { StudentNotificationMaxOrderByAggregateInput } from "../inputs/StudentNotificationMaxOrderByAggregateInput";
import { StudentNotificationMinOrderByAggregateInput } from "../inputs/StudentNotificationMinOrderByAggregateInput";
import { StudentNotificationSumOrderByAggregateInput } from "../inputs/StudentNotificationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StudentNotificationOrderByWithAggregationInput", {
  isAbstract: true
})
export class StudentNotificationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StudentNotificationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StudentNotificationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StudentNotificationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StudentNotificationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StudentNotificationSumOrderByAggregateInput | undefined;
}
