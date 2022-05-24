import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateManyStudentInputEnvelope } from "../inputs/AssessmentReportCreateManyStudentInputEnvelope";
import { AssessmentReportCreateOrConnectWithoutStudentInput } from "../inputs/AssessmentReportCreateOrConnectWithoutStudentInput";
import { AssessmentReportCreateWithoutStudentInput } from "../inputs/AssessmentReportCreateWithoutStudentInput";
import { AssessmentReportScalarWhereInput } from "../inputs/AssessmentReportScalarWhereInput";
import { AssessmentReportUpdateManyWithWhereWithoutStudentInput } from "../inputs/AssessmentReportUpdateManyWithWhereWithoutStudentInput";
import { AssessmentReportUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/AssessmentReportUpdateWithWhereUniqueWithoutStudentInput";
import { AssessmentReportUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/AssessmentReportUpsertWithWhereUniqueWithoutStudentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportUpdateManyWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentReportUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateWithoutStudentInput], {
    nullable: true
  })
  create?: AssessmentReportCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentReportCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: AssessmentReportUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentReportCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereUniqueInput], {
    nullable: true
  })
  set?: AssessmentReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AssessmentReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereUniqueInput], {
    nullable: true
  })
  delete?: AssessmentReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereUniqueInput], {
    nullable: true
  })
  connect?: AssessmentReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: AssessmentReportUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: AssessmentReportUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssessmentReportScalarWhereInput[] | undefined;
}
