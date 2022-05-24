import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackCreateWithoutStaffInput } from "../inputs/StaffFeedbackCreateWithoutStaffInput";
import { StaffFeedbackWhereUniqueInput } from "../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StaffFeedbackCreateOrConnectWithoutStaffInput", {
  isAbstract: true
})
export class StaffFeedbackCreateOrConnectWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StaffFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffFeedbackCreateWithoutStaffInput, {
    nullable: false
  })
  create!: StaffFeedbackCreateWithoutStaffInput;
}
