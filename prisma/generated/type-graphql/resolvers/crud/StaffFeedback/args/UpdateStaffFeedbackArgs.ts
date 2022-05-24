import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackUpdateInput } from "../../../inputs/StaffFeedbackUpdateInput";
import { StaffFeedbackWhereUniqueInput } from "../../../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackUpdateInput, {
    nullable: false
  })
  data!: StaffFeedbackUpdateInput;

  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StaffFeedbackWhereUniqueInput;
}
