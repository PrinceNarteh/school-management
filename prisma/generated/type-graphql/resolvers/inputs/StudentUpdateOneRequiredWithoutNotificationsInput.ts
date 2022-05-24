import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutNotificationsInput } from "../inputs/StudentCreateOrConnectWithoutNotificationsInput";
import { StudentCreateWithoutNotificationsInput } from "../inputs/StudentCreateWithoutNotificationsInput";
import { StudentUpdateWithoutNotificationsInput } from "../inputs/StudentUpdateWithoutNotificationsInput";
import { StudentUpsertWithoutNotificationsInput } from "../inputs/StudentUpsertWithoutNotificationsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateOneRequiredWithoutNotificationsInput", {
  isAbstract: true
})
export class StudentUpdateOneRequiredWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: StudentCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: StudentUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutNotificationsInput, {
    nullable: true
  })
  update?: StudentUpdateWithoutNotificationsInput | undefined;
}
