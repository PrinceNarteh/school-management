import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutNotificationsInput } from "../inputs/StudentCreateWithoutNotificationsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateOrConnectWithoutNotificationsInput", {
  isAbstract: true
})
export class StudentCreateOrConnectWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: StudentCreateWithoutNotificationsInput;
}
