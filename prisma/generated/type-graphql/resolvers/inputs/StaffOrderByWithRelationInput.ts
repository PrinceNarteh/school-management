import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackOrderByRelationAggregateInput } from "../inputs/StaffFeedbackOrderByRelationAggregateInput";
import { StaffLeaveReportOrderByRelationAggregateInput } from "../inputs/StaffLeaveReportOrderByRelationAggregateInput";
import { StaffNotificationOrderByRelationAggregateInput } from "../inputs/StaffNotificationOrderByRelationAggregateInput";
import { SubjectOrderByRelationAggregateInput } from "../inputs/SubjectOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StaffOrderByWithRelationInput", {
  isAbstract: true
})
export class StaffOrderByWithRelationInput {
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
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubjectOrderByRelationAggregateInput, {
    nullable: true
  })
  subjects?: SubjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  staffNotification?: StaffNotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportOrderByRelationAggregateInput, {
    nullable: true
  })
  staffLeaveReport?: StaffLeaveReportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackOrderByRelationAggregateInput, {
    nullable: true
  })
  staffFeedback?: StaffFeedbackOrderByRelationAggregateInput | undefined;
}
