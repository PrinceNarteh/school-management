import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationWhereInput } from "../inputs/StudentNotificationWhereInput";

@TypeGraphQL.InputType("StudentNotificationListRelationFilter", {
  isAbstract: true
})
export class StudentNotificationListRelationFilter {
  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  every?: StudentNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  some?: StudentNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  none?: StudentNotificationWhereInput | undefined;
}
