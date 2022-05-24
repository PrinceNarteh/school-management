import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStaffFeedbackInput } from "../inputs/StaffCreateWithoutStaffFeedbackInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutStaffFeedbackInput", {
  isAbstract: true
})
export class StaffCreateOrConnectWithoutStaffFeedbackInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffFeedbackInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStaffFeedbackInput;
}
