import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackScalarWhereInput } from "../inputs/StaffFeedbackScalarWhereInput";
import { StaffFeedbackUpdateManyMutationInput } from "../inputs/StaffFeedbackUpdateManyMutationInput";

@TypeGraphQL.InputType("StaffFeedbackUpdateManyWithWhereWithoutStaffInput", {
  isAbstract: true
})
export class StaffFeedbackUpdateManyWithWhereWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffFeedbackScalarWhereInput, {
    nullable: false
  })
  where!: StaffFeedbackScalarWhereInput;

  @TypeGraphQL.Field(_type => StaffFeedbackUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffFeedbackUpdateManyMutationInput;
}
