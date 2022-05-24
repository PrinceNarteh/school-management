import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutSubjectsInput } from "../inputs/StaffCreateWithoutSubjectsInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutSubjectsInput", {
  isAbstract: true
})
export class StaffCreateOrConnectWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: StaffCreateWithoutSubjectsInput;
}
