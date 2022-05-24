import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackUpdateWithoutStaffInput } from "../inputs/StaffFeedbackUpdateWithoutStaffInput";
import { StaffFeedbackWhereUniqueInput } from "../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StaffFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffFeedbackUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: StaffFeedbackUpdateWithoutStaffInput;
}
