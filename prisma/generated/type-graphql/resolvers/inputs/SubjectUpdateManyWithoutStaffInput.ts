import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyStaffInputEnvelope } from "../inputs/SubjectCreateManyStaffInputEnvelope";
import { SubjectCreateOrConnectWithoutStaffInput } from "../inputs/SubjectCreateOrConnectWithoutStaffInput";
import { SubjectCreateWithoutStaffInput } from "../inputs/SubjectCreateWithoutStaffInput";
import { SubjectScalarWhereInput } from "../inputs/SubjectScalarWhereInput";
import { SubjectUpdateManyWithWhereWithoutStaffInput } from "../inputs/SubjectUpdateManyWithWhereWithoutStaffInput";
import { SubjectUpdateWithWhereUniqueWithoutStaffInput } from "../inputs/SubjectUpdateWithWhereUniqueWithoutStaffInput";
import { SubjectUpsertWithWhereUniqueWithoutStaffInput } from "../inputs/SubjectUpsertWithWhereUniqueWithoutStaffInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateManyWithoutStaffInput", {
  isAbstract: true
})
export class SubjectUpdateManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutStaffInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpsertWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  upsert?: SubjectUpsertWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyStaffInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SubjectUpdateWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  update?: SubjectUpdateWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateManyWithWhereWithoutStaffInput], {
    nullable: true
  })
  updateMany?: SubjectUpdateManyWithWhereWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubjectScalarWhereInput[] | undefined;
}
