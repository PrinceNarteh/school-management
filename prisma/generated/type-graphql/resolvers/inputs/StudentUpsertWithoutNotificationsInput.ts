import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutNotificationsInput } from "../inputs/StudentCreateWithoutNotificationsInput";
import { StudentUpdateWithoutNotificationsInput } from "../inputs/StudentUpdateWithoutNotificationsInput";

@TypeGraphQL.InputType("StudentUpsertWithoutNotificationsInput", {
  isAbstract: true
})
export class StudentUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: StudentCreateWithoutNotificationsInput;
}
