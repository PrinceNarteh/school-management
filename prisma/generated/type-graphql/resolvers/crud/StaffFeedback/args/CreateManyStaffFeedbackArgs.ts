import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackCreateManyInput } from "../../../inputs/StaffFeedbackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => [StaffFeedbackCreateManyInput], {
    nullable: false
  })
  data!: StaffFeedbackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
