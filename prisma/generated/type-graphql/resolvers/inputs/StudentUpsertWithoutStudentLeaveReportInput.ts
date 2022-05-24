import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutStudentLeaveReportInput } from "../inputs/StudentCreateWithoutStudentLeaveReportInput";
import { StudentUpdateWithoutStudentLeaveReportInput } from "../inputs/StudentUpdateWithoutStudentLeaveReportInput";

@TypeGraphQL.InputType("StudentUpsertWithoutStudentLeaveReportInput", {
  isAbstract: true
})
export class StudentUpsertWithoutStudentLeaveReportInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutStudentLeaveReportInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutStudentLeaveReportInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentLeaveReportInput, {
    nullable: false
  })
  create!: StudentCreateWithoutStudentLeaveReportInput;
}
