import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackCreateInput } from "../../../inputs/StaffFeedbackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackCreateInput, {
    nullable: false
  })
  data!: StaffFeedbackCreateInput;
}
