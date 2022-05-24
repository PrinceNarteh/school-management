import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutStudentLeaveReportInput } from "../inputs/StudentCreateWithoutStudentLeaveReportInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateOrConnectWithoutStudentLeaveReportInput", {
  isAbstract: true
})
export class StudentCreateOrConnectWithoutStudentLeaveReportInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentLeaveReportInput, {
    nullable: false
  })
  create!: StudentCreateWithoutStudentLeaveReportInput;
}
