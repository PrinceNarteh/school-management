import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateNestedOneWithoutStudentLeaveReportInput } from "../inputs/StudentCreateNestedOneWithoutStudentLeaveReportInput";

@TypeGraphQL.InputType("StudentLeaveReportCreateInput", {
  isAbstract: true
})
export class StudentLeaveReportCreateInput {
  @TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutStudentLeaveReportInput, {
    nullable: false
  })
  student!: StudentCreateNestedOneWithoutStudentLeaveReportInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
