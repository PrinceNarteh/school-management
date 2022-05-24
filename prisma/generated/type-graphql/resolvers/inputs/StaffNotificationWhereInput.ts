import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StaffRelationFilter } from "../inputs/StaffRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StaffNotificationWhereInput", {
  isAbstract: true
})
export class StaffNotificationWhereInput {
  @TypeGraphQL.Field(_type => [StaffNotificationWhereInput], {
    nullable: true
  })
  AND?: StaffNotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereInput], {
    nullable: true
  })
  OR?: StaffNotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationWhereInput], {
    nullable: true
  })
  NOT?: StaffNotificationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StaffRelationFilter, {
    nullable: true
  })
  staff?: StaffRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
