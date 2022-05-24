import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackOrderByWithAggregationInput } from "../../../inputs/StudentFeedbackOrderByWithAggregationInput";
import { StudentFeedbackScalarWhereWithAggregatesInput } from "../../../inputs/StudentFeedbackScalarWhereWithAggregatesInput";
import { StudentFeedbackWhereInput } from "../../../inputs/StudentFeedbackWhereInput";
import { StudentFeedbackScalarFieldEnum } from "../../../../enums/StudentFeedbackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  where?: StudentFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StudentFeedbackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "studentId" | "message" | "reply" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StudentFeedbackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StudentFeedbackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
