import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentOrderByRelationAggregateInput } from "../inputs/AssessmentOrderByRelationAggregateInput";
import { AssessmentReportOrderByRelationAggregateInput } from "../inputs/AssessmentReportOrderByRelationAggregateInput";
import { StudentFeedbackOrderByRelationAggregateInput } from "../inputs/StudentFeedbackOrderByRelationAggregateInput";
import { StudentLeaveReportOrderByRelationAggregateInput } from "../inputs/StudentLeaveReportOrderByRelationAggregateInput";
import { StudentNotificationOrderByRelationAggregateInput } from "../inputs/StudentNotificationOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StudentOrderByWithRelationInput", {
  isAbstract: true
})
export class StudentOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  middleName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dateOfBirth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  profilePic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admissionStatus?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications?: StudentNotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentOrderByRelationAggregateInput, {
    nullable: true
  })
  assessment?: AssessmentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportOrderByRelationAggregateInput, {
    nullable: true
  })
  assessmentReport?: AssessmentReportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportOrderByRelationAggregateInput, {
    nullable: true
  })
  studentLeaveReport?: StudentLeaveReportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackOrderByRelationAggregateInput, {
    nullable: true
  })
  studentFeedback?: StudentFeedbackOrderByRelationAggregateInput | undefined;
}
