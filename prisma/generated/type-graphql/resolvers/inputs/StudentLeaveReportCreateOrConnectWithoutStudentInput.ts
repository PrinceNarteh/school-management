import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportCreateWithoutStudentInput } from "../inputs/StudentLeaveReportCreateWithoutStudentInput";
import { StudentLeaveReportWhereUniqueInput } from "../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StudentLeaveReportCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class StudentLeaveReportCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StudentLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportCreateWithoutStudentInput, {
    nullable: false
  })
  create!: StudentLeaveReportCreateWithoutStudentInput;
}
