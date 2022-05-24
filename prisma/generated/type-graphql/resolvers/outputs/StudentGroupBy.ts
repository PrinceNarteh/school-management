import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentAvgAggregate } from "../outputs/StudentAvgAggregate";
import { StudentCountAggregate } from "../outputs/StudentCountAggregate";
import { StudentMaxAggregate } from "../outputs/StudentMaxAggregate";
import { StudentMinAggregate } from "../outputs/StudentMinAggregate";
import { StudentSumAggregate } from "../outputs/StudentSumAggregate";
import { AdmissionStatus } from "../../enums/AdmissionStatus";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.ObjectType("StudentGroupBy", {
  isAbstract: true
})
export class StudentGroupBy {
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
  middleName!: string | null;

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
  admissionStatus!: "Recieved" | "InProgress" | "Admitted";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => StudentCountAggregate, {
    nullable: true
  })
  _count!: StudentCountAggregate | null;

  @TypeGraphQL.Field(_type => StudentAvgAggregate, {
    nullable: true
  })
  _avg!: StudentAvgAggregate | null;

  @TypeGraphQL.Field(_type => StudentSumAggregate, {
    nullable: true
  })
  _sum!: StudentSumAggregate | null;

  @TypeGraphQL.Field(_type => StudentMinAggregate, {
    nullable: true
  })
  _min!: StudentMinAggregate | null;

  @TypeGraphQL.Field(_type => StudentMaxAggregate, {
    nullable: true
  })
  _max!: StudentMaxAggregate | null;
}
