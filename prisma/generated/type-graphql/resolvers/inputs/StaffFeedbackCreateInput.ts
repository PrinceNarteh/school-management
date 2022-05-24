import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateNestedOneWithoutStaffFeedbackInput } from "../inputs/StaffCreateNestedOneWithoutStaffFeedbackInput";

@TypeGraphQL.InputType("StaffFeedbackCreateInput", {
  isAbstract: true
})
export class StaffFeedbackCreateInput {
  @TypeGraphQL.Field(_type => StaffCreateNestedOneWithoutStaffFeedbackInput, {
    nullable: false
  })
  staff!: StaffCreateNestedOneWithoutStaffFeedbackInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reply!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
