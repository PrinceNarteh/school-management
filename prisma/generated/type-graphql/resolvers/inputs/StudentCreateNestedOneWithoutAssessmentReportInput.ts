import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutAssessmentReportInput } from "../inputs/StudentCreateOrConnectWithoutAssessmentReportInput";
import { StudentCreateWithoutAssessmentReportInput } from "../inputs/StudentCreateWithoutAssessmentReportInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedOneWithoutAssessmentReportInput", {
  isAbstract: true
})
export class StudentCreateNestedOneWithoutAssessmentReportInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentReportInput, {
    nullable: true
  })
  create?: StudentCreateWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutAssessmentReportInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutAssessmentReportInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;
}
