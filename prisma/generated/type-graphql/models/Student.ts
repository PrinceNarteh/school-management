import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assessment } from "../models/Assessment";
import { AssessmentReport } from "../models/AssessmentReport";
import { StudentFeedback } from "../models/StudentFeedback";
import { StudentLeaveReport } from "../models/StudentLeaveReport";
import { StudentNotification } from "../models/StudentNotification";
import { AdmissionStatus } from "../enums/AdmissionStatus";
import { Gender } from "../enums/Gender";
import { StudentCount } from "../resolvers/outputs/StudentCount";

@TypeGraphQL.ObjectType("Student", {
  isAbstract: true
})
export class Student {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middleName?: string | null;

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
    nullable: false
  })
  admissionStatus!: "Received" | "InProgress" | "Admitted";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  notifications?: StudentNotification[];

  assessment?: Assessment[];

  assessmentReport?: AssessmentReport[];

  studentLeaveReport?: StudentLeaveReport[];

  studentFeedback?: StudentFeedback[];

  @TypeGraphQL.Field(_type => StudentCount, {
    nullable: true
  })
  _count?: StudentCount | null;
}
