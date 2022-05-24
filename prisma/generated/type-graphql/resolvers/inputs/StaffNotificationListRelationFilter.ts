import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationWhereInput } from "../inputs/StaffNotificationWhereInput";

@TypeGraphQL.InputType("StaffNotificationListRelationFilter", {
  isAbstract: true
})
export class StaffNotificationListRelationFilter {
  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  every?: StaffNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  some?: StaffNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  none?: StaffNotificationWhereInput | undefined;
}
