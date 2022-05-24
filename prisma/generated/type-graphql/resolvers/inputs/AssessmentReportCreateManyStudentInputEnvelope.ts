import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateManyStudentInput } from "../inputs/AssessmentReportCreateManyStudentInput";

@TypeGraphQL.InputType("AssessmentReportCreateManyStudentInputEnvelope", {
  isAbstract: true
})
export class AssessmentReportCreateManyStudentInputEnvelope {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateManyStudentInput], {
    nullable: false
  })
  data!: AssessmentReportCreateManyStudentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
