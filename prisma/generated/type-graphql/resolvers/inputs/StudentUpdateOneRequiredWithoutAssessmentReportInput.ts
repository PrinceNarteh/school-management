import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutAssessmentReportInput } from "../inputs/StudentCreateOrConnectWithoutAssessmentReportInput";
import { StudentCreateWithoutAssessmentReportInput } from "../inputs/StudentCreateWithoutAssessmentReportInput";
import { StudentUpdateWithoutAssessmentReportInput } from "../inputs/StudentUpdateWithoutAssessmentReportInput";
import { StudentUpsertWithoutAssessmentReportInput } from "../inputs/StudentUpsertWithoutAssessmentReportInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateOneRequiredWithoutAssessmentReportInput", {
  isAbstract: true
})
export class StudentUpdateOneRequiredWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentReportInput, {
    nullable: true
  })
  create?: StudentCreateWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutAssessmentReportInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutAssessmentReportInput, {
    nullable: true
  })
  upsert?: StudentUpsertWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutAssessmentReportInput, {
    nullable: true
  })
  update?: StudentUpdateWithoutAssessmentReportInput | undefined;
}
