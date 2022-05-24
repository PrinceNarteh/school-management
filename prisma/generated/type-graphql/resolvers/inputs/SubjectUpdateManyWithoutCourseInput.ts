import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyCourseInputEnvelope } from "../inputs/SubjectCreateManyCourseInputEnvelope";
import { SubjectCreateOrConnectWithoutCourseInput } from "../inputs/SubjectCreateOrConnectWithoutCourseInput";
import { SubjectCreateWithoutCourseInput } from "../inputs/SubjectCreateWithoutCourseInput";
import { SubjectScalarWhereInput } from "../inputs/SubjectScalarWhereInput";
import { SubjectUpdateManyWithWhereWithoutCourseInput } from "../inputs/SubjectUpdateManyWithWhereWithoutCourseInput";
import { SubjectUpdateWithWhereUniqueWithoutCourseInput } from "../inputs/SubjectUpdateWithWhereUniqueWithoutCourseInput";
import { SubjectUpsertWithWhereUniqueWithoutCourseInput } from "../inputs/SubjectUpsertWithWhereUniqueWithoutCourseInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateManyWithoutCourseInput", {
  isAbstract: true
})
export class SubjectUpdateManyWithoutCourseInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutCourseInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpsertWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  upsert?: SubjectUpsertWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyCourseInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyCourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  set?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  delete?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  update?: SubjectUpdateWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateManyWithWhereWithoutCourseInput], {
    nullable: true
  })
  updateMany?: SubjectUpdateManyWithWhereWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubjectScalarWhereInput[] | undefined;
}
