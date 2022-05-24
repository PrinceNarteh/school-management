import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportAvgAggregate } from "../outputs/StaffLeaveReportAvgAggregate";
import { StaffLeaveReportCountAggregate } from "../outputs/StaffLeaveReportCountAggregate";
import { StaffLeaveReportMaxAggregate } from "../outputs/StaffLeaveReportMaxAggregate";
import { StaffLeaveReportMinAggregate } from "../outputs/StaffLeaveReportMinAggregate";
import { StaffLeaveReportSumAggregate } from "../outputs/StaffLeaveReportSumAggregate";

@TypeGraphQL.ObjectType("AggregateStaffLeaveReport", {
  isAbstract: true
})
export class AggregateStaffLeaveReport {
  @TypeGraphQL.Field(_type => StaffLeaveReportCountAggregate, {
    nullable: true
  })
  _count!: StaffLeaveReportCountAggregate | null;

  @TypeGraphQL.Field(_type => StaffLeaveReportAvgAggregate, {
    nullable: true
  })
  _avg!: StaffLeaveReportAvgAggregate | null;

  @TypeGraphQL.Field(_type => StaffLeaveReportSumAggregate, {
    nullable: true
  })
  _sum!: StaffLeaveReportSumAggregate | null;

  @TypeGraphQL.Field(_type => StaffLeaveReportMinAggregate, {
    nullable: true
  })
  _min!: StaffLeaveReportMinAggregate | null;

  @TypeGraphQL.Field(_type => StaffLeaveReportMaxAggregate, {
    nullable: true
  })
  _max!: StaffLeaveReportMaxAggregate | null;
}
