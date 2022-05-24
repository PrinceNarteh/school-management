import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackOrderByWithRelationInput } from "../../../inputs/StaffFeedbackOrderByWithRelationInput";
import { StaffFeedbackWhereInput } from "../../../inputs/StaffFeedbackWhereInput";
import { StaffFeedbackWhereUniqueInput } from "../../../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStaffFeedbackArgs {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  where?: StaffFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StaffFeedbackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: true
  })
  cursor?: StaffFeedbackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
