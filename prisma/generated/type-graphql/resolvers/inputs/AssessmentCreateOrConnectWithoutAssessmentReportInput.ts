import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateWithoutAssessmentReportInput } from "../inputs/AssessmentCreateWithoutAssessmentReportInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentCreateOrConnectWithoutAssessmentReportInput", {
  isAbstract: true
})
export class AssessmentCreateOrConnectWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentCreateWithoutAssessmentReportInput, {
    nullable: false
  })
  create!: AssessmentCreateWithoutAssessmentReportInput;
}
