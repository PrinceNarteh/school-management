import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackWhereUniqueInput } from "../../../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StaffFeedbackWhereUniqueInput;
}
