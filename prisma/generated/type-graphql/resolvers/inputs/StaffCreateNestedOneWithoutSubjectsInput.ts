import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutSubjectsInput } from "../inputs/StaffCreateOrConnectWithoutSubjectsInput";
import { StaffCreateWithoutSubjectsInput } from "../inputs/StaffCreateWithoutSubjectsInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateNestedOneWithoutSubjectsInput", {
  isAbstract: true
})
export class StaffCreateNestedOneWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutSubjectsInput, {
    nullable: true
  })
  create?: StaffCreateWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutSubjectsInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;
}
