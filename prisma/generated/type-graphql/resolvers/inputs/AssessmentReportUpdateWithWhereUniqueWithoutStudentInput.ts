import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportUpdateWithoutStudentInput } from "../inputs/AssessmentReportUpdateWithoutStudentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentReportUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: AssessmentReportUpdateWithoutStudentInput;
}
