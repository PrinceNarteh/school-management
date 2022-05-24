import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateManyStudentInputEnvelope } from "../inputs/AssessmentReportCreateManyStudentInputEnvelope";
import { AssessmentReportCreateOrConnectWithoutStudentInput } from "../inputs/AssessmentReportCreateOrConnectWithoutStudentInput";
import { AssessmentReportCreateWithoutStudentInput } from "../inputs/AssessmentReportCreateWithoutStudentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentReportCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateWithoutStudentInput], {
    nullable: true
  })
  create?: AssessmentReportCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentReportCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentReportCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereUniqueInput], {
    nullable: true
  })
  connect?: AssessmentReportWhereUniqueInput[] | undefined;
}
