import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutSubjectsInput } from "../inputs/StaffCreateWithoutSubjectsInput";
import { StaffUpdateWithoutSubjectsInput } from "../inputs/StaffUpdateWithoutSubjectsInput";

@TypeGraphQL.InputType("StaffUpsertWithoutSubjectsInput", {
  isAbstract: true
})
export class StaffUpsertWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutSubjectsInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: StaffCreateWithoutSubjectsInput;
}
