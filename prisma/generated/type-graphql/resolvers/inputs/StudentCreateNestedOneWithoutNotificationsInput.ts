import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutNotificationsInput } from "../inputs/StudentCreateOrConnectWithoutNotificationsInput";
import { StudentCreateWithoutNotificationsInput } from "../inputs/StudentCreateWithoutNotificationsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedOneWithoutNotificationsInput", {
  isAbstract: true
})
export class StudentCreateNestedOneWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: StudentCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;
}
