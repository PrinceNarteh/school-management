import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentListRelationFilter } from "../inputs/AssessmentListRelationFilter";
import { AssessmentReportListRelationFilter } from "../inputs/AssessmentReportListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAdmissionStatusFilter } from "../inputs/EnumAdmissionStatusFilter";
import { EnumGenderFilter } from "../inputs/EnumGenderFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StudentFeedbackListRelationFilter } from "../inputs/StudentFeedbackListRelationFilter";
import { StudentLeaveReportListRelationFilter } from "../inputs/StudentLeaveReportListRelationFilter";
import { StudentNotificationListRelationFilter } from "../inputs/StudentNotificationListRelationFilter";

@TypeGraphQL.InputType("StudentWhereInput", {
  isAbstract: true
})
export class StudentWhereInput {
  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true
  })
  AND?: StudentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true
  })
  OR?: StudentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true
  })
  NOT?: StudentWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dateOfBirth?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  profilePic?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAdmissionStatusFilter, {
    nullable: true
  })
  admissionStatus?: EnumAdmissionStatusFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationListRelationFilter, {
    nullable: true
  })
  notifications?: StudentNotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AssessmentListRelationFilter, {
    nullable: true
  })
  assessment?: AssessmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportListRelationFilter, {
    nullable: true
  })
  assessmentReport?: AssessmentReportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportListRelationFilter, {
    nullable: true
  })
  studentLeaveReport?: StudentLeaveReportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackListRelationFilter, {
    nullable: true
  })
  studentFeedback?: StudentFeedbackListRelationFilter | undefined;
}
