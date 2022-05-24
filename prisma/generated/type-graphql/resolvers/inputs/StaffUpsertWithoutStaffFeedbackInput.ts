import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStaffFeedbackInput } from "../inputs/StaffCreateWithoutStaffFeedbackInput";
import { StaffUpdateWithoutStaffFeedbackInput } from "../inputs/StaffUpdateWithoutStaffFeedbackInput";

@TypeGraphQL.InputType("StaffUpsertWithoutStaffFeedbackInput", {
  isAbstract: true
})
export class StaffUpsertWithoutStaffFeedbackInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutStaffFeedbackInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutStaffFeedbackInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffFeedbackInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStaffFeedbackInput;
}
