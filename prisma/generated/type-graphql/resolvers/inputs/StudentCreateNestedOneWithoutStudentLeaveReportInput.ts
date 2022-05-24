import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutStudentLeaveReportInput } from "../inputs/StudentCreateOrConnectWithoutStudentLeaveReportInput";
import { StudentCreateWithoutStudentLeaveReportInput } from "../inputs/StudentCreateWithoutStudentLeaveReportInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedOneWithoutStudentLeaveReportInput", {
  isAbstract: true
})
export class StudentCreateNestedOneWithoutStudentLeaveReportInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentLeaveReportInput, {
    nullable: true
  })
  create?: StudentCreateWithoutStudentLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutStudentLeaveReportInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutStudentLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;
}
