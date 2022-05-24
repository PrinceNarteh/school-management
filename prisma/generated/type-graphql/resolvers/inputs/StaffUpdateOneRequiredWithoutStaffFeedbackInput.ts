import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutStaffFeedbackInput } from "../inputs/StaffCreateOrConnectWithoutStaffFeedbackInput";
import { StaffCreateWithoutStaffFeedbackInput } from "../inputs/StaffCreateWithoutStaffFeedbackInput";
import { StaffUpdateWithoutStaffFeedbackInput } from "../inputs/StaffUpdateWithoutStaffFeedbackInput";
import { StaffUpsertWithoutStaffFeedbackInput } from "../inputs/StaffUpsertWithoutStaffFeedbackInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateOneRequiredWithoutStaffFeedbackInput", {
  isAbstract: true
})
export class StaffUpdateOneRequiredWithoutStaffFeedbackInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutStaffFeedbackInput, {
    nullable: true
  })
  create?: StaffCreateWithoutStaffFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutStaffFeedbackInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStaffFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpsertWithoutStaffFeedbackInput, {
    nullable: true
  })
  upsert?: StaffUpsertWithoutStaffFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutStaffFeedbackInput, {
    nullable: true
  })
  update?: StaffUpdateWithoutStaffFeedbackInput | undefined;
}
