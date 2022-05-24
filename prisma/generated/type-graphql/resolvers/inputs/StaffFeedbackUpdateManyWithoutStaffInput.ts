import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackCreateManyStaffInputEnvelope } from "../inputs/StaffFeedbackCreateManyStaffInputEnvelope";
import { StaffFeedbackCreateOrConnectWithoutStaffInput } from "../inputs/StaffFeedbackCreateOrConnectWithoutStaffInput";
import { StaffFeedbackCreateWithoutStaffInput } from "../inputs/StaffFeedbackCreateWithoutStaffInput";
import { StaffFeedbackScalarWhereInput } from "../inputs/StaffFeedbackScalarWhereInput";
import { StaffFeedbackUpdateManyWithWhereWithoutStaffInput } from "../inputs/StaffFeedbackUpdateManyWithWhereWithoutStaffInput";
import { StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput } from "../inputs/StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput";
import { StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput } from "../inputs/StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput";
import { StaffFeedbackWhereUniqueInput } from "../inputs/StaffFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StaffFeedbackUpdateManyWithoutStaffInput", {
  isAbstract: true
})
export class StaffFeedbackUpdateManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [StaffFeedbackCreateWithoutStaffInput], {
    nullable: true
  })
  create?: StaffFeedbackCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: StaffFeedbackCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  upsert?: StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: StaffFeedbackCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackWhereUniqueInput], {
    nullable: true
  })
  set?: StaffFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StaffFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackWhereUniqueInput], {
    nullable: true
  })
  delete?: StaffFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  update?: StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackUpdateManyWithWhereWithoutStaffInput], {
    nullable: true
  })
  updateMany?: StaffFeedbackUpdateManyWithWhereWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StaffFeedbackScalarWhereInput[] | undefined;
}
