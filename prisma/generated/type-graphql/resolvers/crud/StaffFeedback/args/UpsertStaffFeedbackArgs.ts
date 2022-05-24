import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackCreateInput } from "../../../inputs/StaffFeedbackCreateInput";
import { StaffFeedbackUpdateInput } from "../../../inputs/StaffFeedbackUpdateInput";
import { StaffFeedbackWhereUniqueInput } from "../../../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StaffFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffFeedbackCreateInput, {
    nullable: false
  })
  create!: StaffFeedbackCreateInput;

  @TypeGraphQL.Field(_type => StaffFeedbackUpdateInput, {
    nullable: false
  })
  update!: StaffFeedbackUpdateInput;
}
