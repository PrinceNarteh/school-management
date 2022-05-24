import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackCreateManyStudentInputEnvelope } from "../inputs/StudentFeedbackCreateManyStudentInputEnvelope";
import { StudentFeedbackCreateOrConnectWithoutStudentInput } from "../inputs/StudentFeedbackCreateOrConnectWithoutStudentInput";
import { StudentFeedbackCreateWithoutStudentInput } from "../inputs/StudentFeedbackCreateWithoutStudentInput";
import { StudentFeedbackScalarWhereInput } from "../inputs/StudentFeedbackScalarWhereInput";
import { StudentFeedbackUpdateManyWithWhereWithoutStudentInput } from "../inputs/StudentFeedbackUpdateManyWithWhereWithoutStudentInput";
import { StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput";
import { StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput";
import { StudentFeedbackWhereUniqueInput } from "../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StudentFeedbackUpdateManyWithoutStudentInput", {
  isAbstract: true
})
export class StudentFeedbackUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [StudentFeedbackCreateWithoutStudentInput], {
    nullable: true
  })
  create?: StudentFeedbackCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: StudentFeedbackCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: StudentFeedbackCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackWhereUniqueInput], {
    nullable: true
  })
  set?: StudentFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StudentFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackWhereUniqueInput], {
    nullable: true
  })
  delete?: StudentFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentFeedbackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: StudentFeedbackUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StudentFeedbackScalarWhereInput[] | undefined;
}
