import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportAvgAggregate } from "../outputs/StudentLeaveReportAvgAggregate";
import { StudentLeaveReportCountAggregate } from "../outputs/StudentLeaveReportCountAggregate";
import { StudentLeaveReportMaxAggregate } from "../outputs/StudentLeaveReportMaxAggregate";
import { StudentLeaveReportMinAggregate } from "../outputs/StudentLeaveReportMinAggregate";
import { StudentLeaveReportSumAggregate } from "../outputs/StudentLeaveReportSumAggregate";

@TypeGraphQL.ObjectType("AggregateStudentLeaveReport", {
  isAbstract: true
})
export class AggregateStudentLeaveReport {
  @TypeGraphQL.Field(_type => StudentLeaveReportCountAggregate, {
    nullable: true
  })
  _count!: StudentLeaveReportCountAggregate | null;

  @TypeGraphQL.Field(_type => StudentLeaveReportAvgAggregate, {
    nullable: true
  })
  _avg!: StudentLeaveReportAvgAggregate | null;

  @TypeGraphQL.Field(_type => StudentLeaveReportSumAggregate, {
    nullable: true
  })
  _sum!: StudentLeaveReportSumAggregate | null;

  @TypeGraphQL.Field(_type => StudentLeaveReportMinAggregate, {
    nullable: true
  })
  _min!: StudentLeaveReportMinAggregate | null;

  @TypeGraphQL.Field(_type => StudentLeaveReportMaxAggregate, {
    nullable: true
  })
  _max!: StudentLeaveReportMaxAggregate | null;
}
