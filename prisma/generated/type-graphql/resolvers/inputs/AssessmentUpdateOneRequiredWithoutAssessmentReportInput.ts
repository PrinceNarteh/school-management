import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateOrConnectWithoutAssessmentReportInput } from "../inputs/AssessmentCreateOrConnectWithoutAssessmentReportInput";
import { AssessmentCreateWithoutAssessmentReportInput } from "../inputs/AssessmentCreateWithoutAssessmentReportInput";
import { AssessmentUpdateWithoutAssessmentReportInput } from "../inputs/AssessmentUpdateWithoutAssessmentReportInput";
import { AssessmentUpsertWithoutAssessmentReportInput } from "../inputs/AssessmentUpsertWithoutAssessmentReportInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpdateOneRequiredWithoutAssessmentReportInput", {
  isAbstract: true
})
export class AssessmentUpdateOneRequiredWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => AssessmentCreateWithoutAssessmentReportInput, {
    nullable: true
  })
  create?: AssessmentCreateWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateOrConnectWithoutAssessmentReportInput, {
    nullable: true
  })
  connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentUpsertWithoutAssessmentReportInput, {
    nullable: true
  })
  upsert?: AssessmentUpsertWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: true
  })
  connect?: AssessmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentUpdateWithoutAssessmentReportInput, {
    nullable: true
  })
  update?: AssessmentUpdateWithoutAssessmentReportInput | undefined;
}
