import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportCreateManyStudentInput } from "../inputs/StudentLeaveReportCreateManyStudentInput";

@TypeGraphQL.InputType("StudentLeaveReportCreateManyStudentInputEnvelope", {
  isAbstract: true
})
export class StudentLeaveReportCreateManyStudentInputEnvelope {
  @TypeGraphQL.Field(_type => [StudentLeaveReportCreateManyStudentInput], {
    nullable: false
  })
  data!: StudentLeaveReportCreateManyStudentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
