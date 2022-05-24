import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateManyAssessmentInputEnvelope } from "../inputs/AssessmentReportCreateManyAssessmentInputEnvelope";
import { AssessmentReportCreateOrConnectWithoutAssessmentInput } from "../inputs/AssessmentReportCreateOrConnectWithoutAssessmentInput";
import { AssessmentReportCreateWithoutAssessmentInput } from "../inputs/AssessmentReportCreateWithoutAssessmentInput";
import { AssessmentReportWhereUniqueInput } from "../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentReportCreateNestedManyWithoutAssessmentInput", {
  isAbstract: true
})
export class AssessmentReportCreateNestedManyWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateWithoutAssessmentInput], {
    nullable: true
  })
  create?: AssessmentReportCreateWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportCreateOrConnectWithoutAssessmentInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentReportCreateOrConnectWithoutAssessmentInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateManyAssessmentInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentReportCreateManyAssessmentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereUniqueInput], {
    nullable: true
  })
  connect?: AssessmentReportWhereUniqueInput[] | undefined;
}
