import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportCreateManyStudentInputEnvelope } from "../inputs/StudentLeaveReportCreateManyStudentInputEnvelope";
import { StudentLeaveReportCreateOrConnectWithoutStudentInput } from "../inputs/StudentLeaveReportCreateOrConnectWithoutStudentInput";
import { StudentLeaveReportCreateWithoutStudentInput } from "../inputs/StudentLeaveReportCreateWithoutStudentInput";
import { StudentLeaveReportScalarWhereInput } from "../inputs/StudentLeaveReportScalarWhereInput";
import { StudentLeaveReportUpdateManyWithWhereWithoutStudentInput } from "../inputs/StudentLeaveReportUpdateManyWithWhereWithoutStudentInput";
import { StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput";
import { StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput";
import { StudentLeaveReportWhereUniqueInput } from "../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StudentLeaveReportUpdateManyWithoutStudentInput", {
  isAbstract: true
})
export class StudentLeaveReportUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [StudentLeaveReportCreateWithoutStudentInput], {
    nullable: true
  })
  create?: StudentLeaveReportCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: StudentLeaveReportCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: StudentLeaveReportCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportWhereUniqueInput], {
    nullable: true
  })
  set?: StudentLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StudentLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportWhereUniqueInput], {
    nullable: true
  })
  delete?: StudentLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentLeaveReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: StudentLeaveReportUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StudentLeaveReportScalarWhereInput[] | undefined;
}
