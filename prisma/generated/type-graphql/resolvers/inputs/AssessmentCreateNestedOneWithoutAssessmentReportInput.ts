import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateOrConnectWithoutAssessmentReportInput } from "../inputs/AssessmentCreateOrConnectWithoutAssessmentReportInput";
import { AssessmentCreateWithoutAssessmentReportInput } from "../inputs/AssessmentCreateWithoutAssessmentReportInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentCreateNestedOneWithoutAssessmentReportInput", {
  isAbstract: true
})
export class AssessmentCreateNestedOneWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => AssessmentCreateWithoutAssessmentReportInput, {
    nullable: true
  })
  create?: AssessmentCreateWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateOrConnectWithoutAssessmentReportInput, {
    nullable: true
  })
  connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: true
  })
  connect?: AssessmentWhereUniqueInput | undefined;
}
