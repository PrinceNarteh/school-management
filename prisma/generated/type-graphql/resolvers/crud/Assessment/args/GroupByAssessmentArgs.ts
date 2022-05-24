import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentOrderByWithAggregationInput } from "../../../inputs/AssessmentOrderByWithAggregationInput";
import { AssessmentScalarWhereWithAggregatesInput } from "../../../inputs/AssessmentScalarWhereWithAggregatesInput";
import { AssessmentWhereInput } from "../../../inputs/AssessmentWhereInput";
import { AssessmentScalarFieldEnum } from "../../../../enums/AssessmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  where?: AssessmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssessmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AssessmentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "studentId" | "subjectId" | "date" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => AssessmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AssessmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
