import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationAvgOrderByAggregateInput } from "../inputs/StaffNotificationAvgOrderByAggregateInput";
import { StaffNotificationCountOrderByAggregateInput } from "../inputs/StaffNotificationCountOrderByAggregateInput";
import { StaffNotificationMaxOrderByAggregateInput } from "../inputs/StaffNotificationMaxOrderByAggregateInput";
import { StaffNotificationMinOrderByAggregateInput } from "../inputs/StaffNotificationMinOrderByAggregateInput";
import { StaffNotificationSumOrderByAggregateInput } from "../inputs/StaffNotificationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StaffNotificationOrderByWithAggregationInput", {
  isAbstract: true
})
export class StaffNotificationOrderByWithAggregationInput {
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
  staffId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StaffNotificationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StaffNotificationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StaffNotificationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StaffNotificationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StaffNotificationSumOrderByAggregateInput | undefined;
}
