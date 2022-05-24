import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackUpdateManyMutationInput } from "../../../inputs/StaffFeedbackUpdateManyMutationInput";
import { StaffFeedbackWhereInput } from "../../../inputs/StaffFeedbackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffFeedbackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  where?: StaffFeedbackWhereInput | undefined;
}
