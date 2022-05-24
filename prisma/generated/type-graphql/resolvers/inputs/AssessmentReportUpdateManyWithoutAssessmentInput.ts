import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateManyAssessmentInputEnvelope } from "../inputs/AssessmentReportCreateManyAssessmentInputEnvelope";
import { AssessmentReportCreateOrConnectWithoutAssessmentInput } from "../inputs/AssessmentReportCreateOrConnectWithoutAssessmentInput";
import { AssessmentReportCreateWithoutAssessmentInput } from "../inputs/AssessmentReportCreateWithoutAssessmentInput";
import { AssessmentReportScalarWhereInput } from "../inputs/AssessmentReportScalarWhereInput";
import { AssessmentReportUpdateManyWithWhereWithoutAssessmentInput } from "../inputs/AssessmentReportUpdateManyWithWhereWithoutAssessmentInput";
import { AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput } from "../inputs/AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput";
import { AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput } from "../inputs/AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportUpdateManyWithoutAssessmentInput", {
  isAbstract: true
})
export class AssessmentReportUpdateManyWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateWithoutAssessmentInput], {
    nullable: true
  })
  create?: AssessmentReportCreateWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportCreateOrConnectWithoutAssessmentInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentReportCreateOrConnectWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput], {
    nullable: true
  })
  upsert?: AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateManyAssessmentInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentReportCreateManyAssessmentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput], {
    nullable: true
  })
  update?: AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportUpdateManyWithWhereWithoutAssessmentInput], {
    nullable: true
  })
  updateMany?: AssessmentReportUpdateManyWithWhereWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssessmentReportScalarWhereInput[] | undefined;
}
