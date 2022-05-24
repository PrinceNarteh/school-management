import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentAvgOrderByAggregateInput } from "../inputs/AssessmentAvgOrderByAggregateInput";
import { AssessmentCountOrderByAggregateInput } from "../inputs/AssessmentCountOrderByAggregateInput";
import { AssessmentMaxOrderByAggregateInput } from "../inputs/AssessmentMaxOrderByAggregateInput";
import { AssessmentMinOrderByAggregateInput } from "../inputs/AssessmentMinOrderByAggregateInput";
import { AssessmentSumOrderByAggregateInput } from "../inputs/AssessmentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AssessmentOrderByWithAggregationInput", {
  isAbstract: true
})
export class AssessmentOrderByWithAggregationInput {
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
  subjectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssessmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AssessmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AssessmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AssessmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AssessmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AssessmentSumOrderByAggregateInput | undefined;
}
