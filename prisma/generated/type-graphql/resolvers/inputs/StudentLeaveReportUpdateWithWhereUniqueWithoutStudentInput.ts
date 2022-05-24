import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportUpdateWithoutStudentInput } from "../inputs/StudentLeaveReportUpdateWithoutStudentInput";
import { StudentLeaveReportWhereUniqueInput } from "../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: false
  })
  where!: StudentLeaveReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: StudentLeaveReportUpdateWithoutStudentInput;
}
