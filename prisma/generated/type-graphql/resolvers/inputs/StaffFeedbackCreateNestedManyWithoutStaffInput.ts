import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackCreateManyStaffInputEnvelope } from "../inputs/StaffFeedbackCreateManyStaffInputEnvelope";
import { StaffFeedbackCreateOrConnectWithoutStaffInput } from "../inputs/StaffFeedbackCreateOrConnectWithoutStaffInput";
import { StaffFeedbackCreateWithoutStaffInput } from "../inputs/StaffFeedbackCreateWithoutStaffInput";
import { StaffFeedbackWhereUniqueInput } from "../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StaffFeedbackCreateNestedManyWithoutStaffInput", {
  isAbstract: true
})
export class StaffFeedbackCreateNestedManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [StaffFeedbackCreateWithoutStaffInput], {
    nullable: true
  })
  create?: StaffFeedbackCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: StaffFeedbackCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: StaffFeedbackCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffFeedbackWhereUniqueInput[] | undefined;
}
