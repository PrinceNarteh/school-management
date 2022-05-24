import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutStudentLeaveReportInput } from "../inputs/StudentCreateOrConnectWithoutStudentLeaveReportInput";
import { StudentCreateWithoutStudentLeaveReportInput } from "../inputs/StudentCreateWithoutStudentLeaveReportInput";
import { StudentUpdateWithoutStudentLeaveReportInput } from "../inputs/StudentUpdateWithoutStudentLeaveReportInput";
import { StudentUpsertWithoutStudentLeaveReportInput } from "../inputs/StudentUpsertWithoutStudentLeaveReportInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateOneRequiredWithoutStudentLeaveReportInput", {
  isAbstract: true
})
export class StudentUpdateOneRequiredWithoutStudentLeaveReportInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentLeaveReportInput, {
    nullable: true
  })
  create?: StudentCreateWithoutStudentLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutStudentLeaveReportInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutStudentLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutStudentLeaveReportInput, {
    nullable: true
  })
  upsert?: StudentUpsertWithoutStudentLeaveReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutStudentLeaveReportInput, {
    nullable: true
  })
  update?: StudentUpdateWithoutStudentLeaveReportInput | undefined;
}
