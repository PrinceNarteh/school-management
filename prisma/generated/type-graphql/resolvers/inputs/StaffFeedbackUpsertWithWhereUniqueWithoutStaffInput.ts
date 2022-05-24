import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackCreateWithoutStaffInput } from "../inputs/StaffFeedbackCreateWithoutStaffInput";
import { StaffFeedbackUpdateWithoutStaffInput } from "../inputs/StaffFeedbackUpdateWithoutStaffInput";
import { StaffFeedbackWhereUniqueInput } from "../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StaffFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffFeedbackUpdateWithoutStaffInput, {
    nullable: false
  })
  update!: StaffFeedbackUpdateWithoutStaffInput;

  @TypeGraphQL.Field(_type => StaffFeedbackCreateWithoutStaffInput, {
    nullable: false
  })
  create!: StaffFeedbackCreateWithoutStaffInput;
}
