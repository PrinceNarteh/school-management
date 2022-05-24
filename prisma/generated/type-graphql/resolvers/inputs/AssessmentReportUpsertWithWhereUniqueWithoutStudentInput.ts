import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateWithoutStudentInput } from "../inputs/AssessmentReportCreateWithoutStudentInput";
import { AssessmentReportUpdateWithoutStudentInput } from "../inputs/AssessmentReportUpdateWithoutStudentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportUpsertWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentReportUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: AssessmentReportUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => AssessmentReportCreateWithoutStudentInput, {
    nullable: false
  })
  create!: AssessmentReportCreateWithoutStudentInput;
}
