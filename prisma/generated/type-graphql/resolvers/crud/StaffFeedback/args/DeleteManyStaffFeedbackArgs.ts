import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackWhereInput } from "../../../inputs/StaffFeedbackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  where?: StaffFeedbackWhereInput | undefined;
}
