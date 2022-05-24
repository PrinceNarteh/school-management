import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateManyStudentInputEnvelope } from "../inputs/AssessmentCreateManyStudentInputEnvelope";
import { AssessmentCreateOrConnectWithoutStudentInput } from "../inputs/AssessmentCreateOrConnectWithoutStudentInput";
import { AssessmentCreateWithoutStudentInput } from "../inputs/AssessmentCreateWithoutStudentInput";
import { AssessmentScalarWhereInput } from "../inputs/AssessmentScalarWhereInput";
import { AssessmentUpdateManyWithWhereWithoutStudentInput } from "../inputs/AssessmentUpdateManyWithWhereWithoutStudentInput";
import { AssessmentUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/AssessmentUpdateWithWhereUniqueWithoutStudentInput";
import { AssessmentUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/AssessmentUpsertWithWhereUniqueWithoutStudentInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpdateManyWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [AssessmentCreateWithoutStudentInput], {
    nullable: true
  })
  create?: AssessmentCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: AssessmentUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereUniqueInput], {
    nullable: true
  })
  set?: AssessmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AssessmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereUniqueInput], {
    nullable: true
  })
  delete?: AssessmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AssessmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: AssessmentUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: AssessmentUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssessmentScalarWhereInput[] | undefined;
}
