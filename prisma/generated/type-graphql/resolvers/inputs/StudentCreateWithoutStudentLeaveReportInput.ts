import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateNestedManyWithoutStudentInput } from "../inputs/AssessmentCreateNestedManyWithoutStudentInput";
import { AssessmentReportCreateNestedManyWithoutStudentInput } from "../inputs/AssessmentReportCreateNestedManyWithoutStudentInput";
import { StudentFeedbackCreateNestedManyWithoutStudentInput } from "../inputs/StudentFeedbackCreateNestedManyWithoutStudentInput";
import { StudentNotificationCreateNestedManyWithoutStudentInput } from "../inputs/StudentNotificationCreateNestedManyWithoutStudentInput";
import { AdmissionStatus } from "../../enums/AdmissionStatus";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("StudentCreateWithoutStudentLeaveReportInput", {
  isAbstract: true
})
export class StudentCreateWithoutStudentLeaveReportInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dateOfBirth!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profilePic!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => AdmissionStatus, {
    nullable: true
  })
  admissionStatus?: "Received" | "InProgress" | "Admitted" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  notifications?: StudentNotificationCreateNestedManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  assessment?: AssessmentCreateNestedManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  assessmentReport?: AssessmentReportCreateNestedManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  studentFeedback?: StudentFeedbackCreateNestedManyWithoutStudentInput | undefined;
}
