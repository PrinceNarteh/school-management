import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutStaffInput } from "../inputs/SubjectCreateWithoutStaffInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateOrConnectWithoutStaffInput", {
  isAbstract: true
})
export class SubjectCreateOrConnectWithoutStaffInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutStaffInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutStaffInput;
}
