import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateManyAssessmentInput } from "../inputs/AssessmentReportCreateManyAssessmentInput";

@TypeGraphQL.InputType("AssessmentReportCreateManyAssessmentInputEnvelope", {
  isAbstract: true
})
export class AssessmentReportCreateManyAssessmentInputEnvelope {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateManyAssessmentInput], {
    nullable: false
  })
  data!: AssessmentReportCreateManyAssessmentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
