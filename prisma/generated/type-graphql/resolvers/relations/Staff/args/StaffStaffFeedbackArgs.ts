import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffFeedbackOrderByWithRelationInput } from "../../../inputs/StaffFeedbackOrderByWithRelationInput";
import { StaffFeedbackWhereInput } from "../../../inputs/StaffFeedbackWhereInput";
import { StaffFeedbackWhereUniqueInput } from "../../../inputs/StaffFeedbackWhereUniqueInput";
import { StaffFeedbackScalarFieldEnum } from "../../../../enums/StaffFeedbackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class StaffStaffFeedbackArgs {
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

  @TypeGraphQL.Field(_type => [StaffFeedbackScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "staffId" | "message" | "reply" | "createdAt" | "updatedAt"> | undefined;
}
