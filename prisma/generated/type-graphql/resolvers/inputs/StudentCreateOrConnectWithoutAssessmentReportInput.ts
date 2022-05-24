import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutAssessmentReportInput } from "../inputs/StudentCreateWithoutAssessmentReportInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateOrConnectWithoutAssessmentReportInput", {
  isAbstract: true
})
export class StudentCreateOrConnectWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentReportInput, {
    nullable: false
  })
  create!: StudentCreateWithoutAssessmentReportInput;
}
