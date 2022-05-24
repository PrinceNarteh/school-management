import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportAvgAggregate } from "../outputs/StaffLeaveReportAvgAggregate";
import { StaffLeaveReportCountAggregate } from "../outputs/StaffLeaveReportCountAggregate";
import { StaffLeaveReportMaxAggregate } from "../outputs/StaffLeaveReportMaxAggregate";
import { StaffLeaveReportMinAggregate } from "../outputs/StaffLeaveReportMinAggregate";
import { StaffLeaveReportSumAggregate } from "../outputs/StaffLeaveReportSumAggregate";

@TypeGraphQL.ObjectType("StaffLeaveReportGroupBy", {
  isAbstract: true
})
export class StaffLeaveReportGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staffId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  status!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
