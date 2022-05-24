import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateNestedManyWithoutStudentInput } from "../inputs/AssessmentCreateNestedManyWithoutStudentInput";
import { AssessmentReportCreateNestedManyWithoutStudentInput } from "../inputs/AssessmentReportCreateNestedManyWithoutStudentInput";
import { StudentFeedbackCreateNestedManyWithoutStudentInput } from "../inputs/StudentFeedbackCreateNestedManyWithoutStudentInput";
import { StudentLeaveReportCreateNestedManyWithoutStudentInput } from "../inputs/StudentLeaveReportCreateNestedManyWithoutStudentInput";
import { AdmissionStatus } from "../../enums/AdmissionStatus";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("StudentCreateWithoutNotificationsInput", {
  isAbstract: true
})
export class StudentCreateWithoutNotificationsInput {
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
  admissionStatus?: "Recieved" | "InProgress" | "Admitted" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  assessment?: AssessmentCreateNestedManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  assessmentReport?: AssessmentReportCreateNestedManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  studentLeaveReport?: StudentLeaveReportCreateNestedManyWithoutStudentInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  studentFeedback?: StudentFeedbackCreateNestedManyWithoutStudentInput | undefined;
}