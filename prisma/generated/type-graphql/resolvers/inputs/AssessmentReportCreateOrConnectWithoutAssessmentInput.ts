import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateWithoutAssessmentInput } from "../inputs/AssessmentReportCreateWithoutAssessmentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportCreateOrConnectWithoutAssessmentInput", {
  isAbstract: true
})
export class AssessmentReportCreateOrConnectWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentReportCreateWithoutAssessmentInput, {
    nullable: false
  })
  create!: AssessmentReportCreateWithoutAssessmentInput;
}
