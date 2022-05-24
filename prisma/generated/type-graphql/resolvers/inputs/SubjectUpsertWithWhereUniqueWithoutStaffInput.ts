import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutStaffInput } from "../inputs/SubjectCreateWithoutStaffInput";
import { SubjectUpdateWithoutStaffInput } from "../inputs/SubjectUpdateWithoutStaffInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpsertWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class SubjectUpsertWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutStaffInput, {
    nullable: false
  })
  update!: SubjectUpdateWithoutStaffInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutStaffInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutStaffInput;
}
