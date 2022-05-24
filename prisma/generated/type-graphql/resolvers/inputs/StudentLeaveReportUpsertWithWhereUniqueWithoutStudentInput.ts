import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportCreateWithoutStudentInput } from "../inputs/StudentLeaveReportCreateWithoutStudentInput";
import { StudentLeaveReportUpdateWithoutStudentInput } from "../inputs/StudentLeaveReportUpdateWithoutStudentInput";
import { StudentLeaveReportWhereUniqueInput } from "../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StudentLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: StudentLeaveReportUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportCreateWithoutStudentInput, {
    nullable: false
  })
  create!: StudentLeaveReportCreateWithoutStudentInput;
}
