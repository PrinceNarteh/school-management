import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportScalarWhereInput } from "../inputs/StudentLeaveReportScalarWhereInput";
import { StudentLeaveReportUpdateManyMutationInput } from "../inputs/StudentLeaveReportUpdateManyMutationInput";

@TypeGraphQL.InputType("StudentLeaveReportUpdateManyWithWhereWithoutStudentInput", {
  isAbstract: true
})
export class StudentLeaveReportUpdateManyWithWhereWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentLeaveReportScalarWhereInput, {
    nullable: false
  })
  where!: StudentLeaveReportScalarWhereInput;

  @TypeGraphQL.Field(_type => StudentLeaveReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentLeaveReportUpdateManyMutationInput;
}
