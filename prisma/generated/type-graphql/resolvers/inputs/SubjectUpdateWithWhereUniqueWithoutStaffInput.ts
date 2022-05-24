import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectUpdateWithoutStaffInput } from "../inputs/SubjectUpdateWithoutStaffInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class SubjectUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: SubjectUpdateWithoutStaffInput;
}
