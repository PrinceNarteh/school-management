import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StaffNotificationScalarWhereInput", {
  isAbstract: true
})
export class StaffNotificationScalarWhereInput {
  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereInput], {
    nullable: true
  })
  AND?: StaffNotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereInput], {
    nullable: true
  })
  OR?: StaffNotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarWhereInput], {
    nullable: true
  })
  NOT?: StaffNotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  message?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staffId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
