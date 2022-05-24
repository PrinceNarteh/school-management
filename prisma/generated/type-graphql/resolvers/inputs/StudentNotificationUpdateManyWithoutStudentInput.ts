import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationCreateManyStudentInputEnvelope } from "../inputs/StudentNotificationCreateManyStudentInputEnvelope";
import { StudentNotificationCreateOrConnectWithoutStudentInput } from "../inputs/StudentNotificationCreateOrConnectWithoutStudentInput";
import { StudentNotificationCreateWithoutStudentInput } from "../inputs/StudentNotificationCreateWithoutStudentInput";
import { StudentNotificationScalarWhereInput } from "../inputs/StudentNotificationScalarWhereInput";
import { StudentNotificationUpdateManyWithWhereWithoutStudentInput } from "../inputs/StudentNotificationUpdateManyWithWhereWithoutStudentInput";
import { StudentNotificationUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/StudentNotificationUpdateWithWhereUniqueWithoutStudentInput";
import { StudentNotificationUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/StudentNotificationUpsertWithWhereUniqueWithoutStudentInput";
import { StudentNotificationWhereUniqueInput } from "../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StudentNotificationUpdateManyWithoutStudentInput", {
  isAbstract: true
})
export class StudentNotificationUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [StudentNotificationCreateWithoutStudentInput], {
    nullable: true
  })
  create?: StudentNotificationCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: StudentNotificationCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: StudentNotificationUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: StudentNotificationCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereUniqueInput], {
    nullable: true
  })
  set?: StudentNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StudentNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: StudentNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentNotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: StudentNotificationUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: StudentNotificationUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StudentNotificationScalarWhereInput[] | undefined;
}
