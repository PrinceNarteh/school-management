import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackOrderByWithAggregationInput } from "../../../inputs/StaffFeedbackOrderByWithAggregationInput";
import { StaffFeedbackScalarWhereWithAggregatesInput } from "../../../inputs/StaffFeedbackScalarWhereWithAggregatesInput";
import { StaffFeedbackWhereInput } from "../../../inputs/StaffFeedbackWhereInput";
import { StaffFeedbackScalarFieldEnum } from "../../../../enums/StaffFeedbackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  where?: StaffFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StaffFeedbackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "staffId" | "message" | "reply" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StaffFeedbackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StaffFeedbackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
