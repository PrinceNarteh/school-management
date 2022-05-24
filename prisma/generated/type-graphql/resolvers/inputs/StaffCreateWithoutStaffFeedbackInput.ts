import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportCreateNestedManyWithoutStaffInput } from "../inputs/StaffLeaveReportCreateNestedManyWithoutStaffInput";
import { StaffNotificationCreateNestedManyWithoutStaffInput } from "../inputs/StaffNotificationCreateNestedManyWithoutStaffInput";
import { SubjectCreateNestedManyWithoutStaffInput } from "../inputs/SubjectCreateNestedManyWithoutStaffInput";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("StaffCreateWithoutStaffFeedbackInput", {
  isAbstract: true
})
export class StaffCreateWithoutStaffFeedbackInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middleName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateNestedManyWithoutStaffInput, {
    nullable: true
  })
  subjects?: SubjectCreateNestedManyWithoutStaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationCreateNestedManyWithoutStaffInput, {
    nullable: true
  })
  staffNotification?: StaffNotificationCreateNestedManyWithoutStaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportCreateNestedManyWithoutStaffInput, {
    nullable: true
  })
  staffLeaveReport?: StaffLeaveReportCreateNestedManyWithoutStaffInput | undefined;
}
