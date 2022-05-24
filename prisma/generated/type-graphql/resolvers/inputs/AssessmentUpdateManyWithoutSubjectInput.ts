import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateManySubjectInputEnvelope } from "../inputs/AssessmentCreateManySubjectInputEnvelope";
import { AssessmentCreateOrConnectWithoutSubjectInput } from "../inputs/AssessmentCreateOrConnectWithoutSubjectInput";
import { AssessmentCreateWithoutSubjectInput } from "../inputs/AssessmentCreateWithoutSubjectInput";
import { AssessmentScalarWhereInput } from "../inputs/AssessmentScalarWhereInput";
import { AssessmentUpdateManyWithWhereWithoutSubjectInput } from "../inputs/AssessmentUpdateManyWithWhereWithoutSubjectInput";
import { AssessmentUpdateWithWhereUniqueWithoutSubjectInput } from "../inputs/AssessmentUpdateWithWhereUniqueWithoutSubjectInput";
import { AssessmentUpsertWithWhereUniqueWithoutSubjectInput } from "../inputs/AssessmentUpsertWithWhereUniqueWithoutSubjectInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpdateManyWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentUpdateManyWithoutSubjectInput {
  @TypeGraphQL.Field(_type => [AssessmentCreateWithoutSubjectInput], {
    nullable: true
  })
  create?: AssessmentCreateWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentCreateOrConnectWithoutSubjectInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentCreateOrConnectWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentUpsertWithWhereUniqueWithoutSubjectInput], {
    nullable: true
  })
  upsert?: AssessmentUpsertWithWhereUniqueWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateManySubjectInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentCreateManySubjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AssessmentUpdateWithWhereUniqueWithoutSubjectInput], {
    nullable: true
  })
  update?: AssessmentUpdateWithWhereUniqueWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentUpdateManyWithWhereWithoutSubjectInput], {
    nullable: true
  })
  updateMany?: AssessmentUpdateManyWithWhereWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssessmentScalarWhereInput[] | undefined;
}
