import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumGenderFilter } from "../inputs/EnumGenderFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StaffFeedbackListRelationFilter } from "../inputs/StaffFeedbackListRelationFilter";
import { StaffLeaveReportListRelationFilter } from "../inputs/StaffLeaveReportListRelationFilter";
import { StaffNotificationListRelationFilter } from "../inputs/StaffNotificationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubjectListRelationFilter } from "../inputs/SubjectListRelationFilter";

@TypeGraphQL.InputType("StaffWhereInput", {
  isAbstract: true
})
export class StaffWhereInput {
  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true
  })
  AND?: StaffWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true
  })
  OR?: StaffWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true
  })
  NOT?: StaffWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  middleName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGenderFilter, {
    nullable: true
  })
  gender?: EnumGenderFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SubjectListRelationFilter, {
    nullable: true
  })
  subjects?: SubjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationListRelationFilter, {
    nullable: true
  })
  staffNotification?: StaffNotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportListRelationFilter, {
    nullable: true
  })
  staffLeaveReport?: StaffLeaveReportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackListRelationFilter, {
    nullable: true
  })
  staffFeedback?: StaffFeedbackListRelationFilter | undefined;
}
