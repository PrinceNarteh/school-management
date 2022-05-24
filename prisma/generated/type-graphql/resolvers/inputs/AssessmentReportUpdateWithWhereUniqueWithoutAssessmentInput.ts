import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportUpdateWithoutAssessmentInput } from "../inputs/AssessmentReportUpdateWithoutAssessmentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput", {
  isAbstract: true
})
export class AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportUpdateWithoutAssessmentInput, {
    nullable: false
  })
  data!: AssessmentReportUpdateWithoutAssessmentInput;
}
