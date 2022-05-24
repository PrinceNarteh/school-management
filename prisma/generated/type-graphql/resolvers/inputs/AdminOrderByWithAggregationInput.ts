import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminAvgOrderByAggregateInput } from "../inputs/AdminAvgOrderByAggregateInput";
import { AdminCountOrderByAggregateInput } from "../inputs/AdminCountOrderByAggregateInput";
import { AdminMaxOrderByAggregateInput } from "../inputs/AdminMaxOrderByAggregateInput";
import { AdminMinOrderByAggregateInput } from "../inputs/AdminMinOrderByAggregateInput";
import { AdminSumOrderByAggregateInput } from "../inputs/AdminSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AdminOrderByWithAggregationInput", {
  isAbstract: true
})
export class AdminOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  middleName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AdminCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AdminCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AdminAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AdminAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AdminMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AdminMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AdminMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AdminMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AdminSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AdminSumOrderByAggregateInput | undefined;
}
