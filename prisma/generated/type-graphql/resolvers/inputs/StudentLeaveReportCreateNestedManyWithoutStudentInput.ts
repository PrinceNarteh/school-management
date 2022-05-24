import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportCreateManyStudentInputEnvelope } from "../inputs/StudentLeaveReportCreateManyStudentInputEnvelope";
import { StudentLeaveReportCreateOrConnectWithoutStudentInput } from "../inputs/StudentLeaveReportCreateOrConnectWithoutStudentInput";
import { StudentLeaveReportCreateWithoutStudentInput } from "../inputs/StudentLeaveReportCreateWithoutStudentInput";
import { StudentLeaveReportWhereUniqueInput } from "../inputs/StudentLeaveReportWhereUniqueInput";

@TypeGraphQL.InputType("StudentLeaveReportCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class StudentLeaveReportCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [StudentLeaveReportCreateWithoutStudentInput], {
    nullable: true
  })
  create?: StudentLeaveReportCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: StudentLeaveReportCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: StudentLeaveReportCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentLeaveReportWhereUniqueInput[] | undefined;
}
