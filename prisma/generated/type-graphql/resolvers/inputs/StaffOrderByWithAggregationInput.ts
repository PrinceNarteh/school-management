import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffAvgOrderByAggregateInput } from "../inputs/StaffAvgOrderByAggregateInput";
import { StaffCountOrderByAggregateInput } from "../inputs/StaffCountOrderByAggregateInput";
import { StaffMaxOrderByAggregateInput } from "../inputs/StaffMaxOrderByAggregateInput";
import { StaffMinOrderByAggregateInput } from "../inputs/StaffMinOrderByAggregateInput";
import { StaffSumOrderByAggregateInput } from "../inputs/StaffSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StaffOrderByWithAggregationInput", {
  isAbstract: true
})
export class StaffOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => StaffCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StaffCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StaffAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StaffMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StaffMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StaffSumOrderByAggregateInput | undefined;
}
