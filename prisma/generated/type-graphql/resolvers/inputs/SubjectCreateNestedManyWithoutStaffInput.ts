import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyStaffInputEnvelope } from "../inputs/SubjectCreateManyStaffInputEnvelope";
import { SubjectCreateOrConnectWithoutStaffInput } from "../inputs/SubjectCreateOrConnectWithoutStaffInput";
import { SubjectCreateWithoutStaffInput } from "../inputs/SubjectCreateWithoutStaffInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateNestedManyWithoutStaffInput", {
  isAbstract: true
})
export class SubjectCreateNestedManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutStaffInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;
}
