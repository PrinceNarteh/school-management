import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutSubjectsInput } from "../inputs/StaffCreateOrConnectWithoutSubjectsInput";
import { StaffCreateWithoutSubjectsInput } from "../inputs/StaffCreateWithoutSubjectsInput";
import { StaffUpdateWithoutSubjectsInput } from "../inputs/StaffUpdateWithoutSubjectsInput";
import { StaffUpsertWithoutSubjectsInput } from "../inputs/StaffUpsertWithoutSubjectsInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateOneRequiredWithoutSubjectsInput", {
  isAbstract: true
})
export class StaffUpdateOneRequiredWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutSubjectsInput, {
    nullable: true
  })
  create?: StaffCreateWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutSubjectsInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpsertWithoutSubjectsInput, {
    nullable: true
  })
  upsert?: StaffUpsertWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutSubjectsInput, {
    nullable: true
  })
  update?: StaffUpdateWithoutSubjectsInput | undefined;
}
