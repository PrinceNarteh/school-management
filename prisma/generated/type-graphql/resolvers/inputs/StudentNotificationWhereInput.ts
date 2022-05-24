import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";

@TypeGraphQL.InputType("StudentNotificationWhereInput", {
  isAbstract: true
})
export class StudentNotificationWhereInput {
  @TypeGraphQL.Field(_type => [StudentNotificationWhereInput], {
    nullable: true
  })
  AND?: StudentNotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereInput], {
    nullable: true
  })
  OR?: StudentNotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereInput], {
    nullable: true
  })
  NOT?: StudentNotificationWhereInput[] | undefined;

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
  studentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StudentRelationFilter, {
    nullable: true
  })
  student?: StudentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
