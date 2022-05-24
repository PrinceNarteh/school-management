import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateWithoutStudentInput } from "../inputs/AssessmentReportCreateWithoutStudentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentReportCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportCreateWithoutStudentInput, {
    nullable: false
  })
  create!: AssessmentReportCreateWithoutStudentInput;
}
