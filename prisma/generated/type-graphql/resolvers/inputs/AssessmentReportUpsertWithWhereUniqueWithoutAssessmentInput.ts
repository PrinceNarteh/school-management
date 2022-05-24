import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateWithoutAssessmentInput } from "../inputs/AssessmentReportCreateWithoutAssessmentInput";
import { AssessmentReportUpdateWithoutAssessmentInput } from "../inputs/AssessmentReportUpdateWithoutAssessmentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput", {
  isAbstract: true
})
export class AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateWithoutAssessmentInput, {
    nullable: false
  })
  update!: AssessmentReportUpdateWithoutAssessmentInput;

  @TypeGraphQL.Field(_type => AssessmentReportCreateWithoutAssessmentInput, {
    nullable: false
  })
  create!: AssessmentReportCreateWithoutAssessmentInput;
}
