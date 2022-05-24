import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportAvgAggregate } from "../outputs/AssessmentReportAvgAggregate";
import { AssessmentReportCountAggregate } from "../outputs/AssessmentReportCountAggregate";
import { AssessmentReportMaxAggregate } from "../outputs/AssessmentReportMaxAggregate";
import { AssessmentReportMinAggregate } from "../outputs/AssessmentReportMinAggregate";
import { AssessmentReportSumAggregate } from "../outputs/AssessmentReportSumAggregate";

@TypeGraphQL.ObjectType("AggregateAssessmentReport", {
  isAbstract: true
})
export class AggregateAssessmentReport {
  @TypeGraphQL.Field(_type => AssessmentReportCountAggregate, {
    nullable: true
  })
  _count!: AssessmentReportCountAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentReportAvgAggregate, {
    nullable: true
  })
  _avg!: AssessmentReportAvgAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentReportSumAggregate, {
    nullable: true
  })
  _sum!: AssessmentReportSumAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentReportMinAggregate, {
    nullable: true
  })
  _min!: AssessmentReportMinAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentReportMaxAggregate, {
    nullable: true
  })
  _max!: AssessmentReportMaxAggregate | null;
}
