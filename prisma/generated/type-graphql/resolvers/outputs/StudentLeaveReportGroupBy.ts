import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportAvgAggregate } from "../outputs/StudentLeaveReportAvgAggregate";
import { StudentLeaveReportCountAggregate } from "../outputs/StudentLeaveReportCountAggregate";
import { StudentLeaveReportMaxAggregate } from "../outputs/StudentLeaveReportMaxAggregate";
import { StudentLeaveReportMinAggregate } from "../outputs/StudentLeaveReportMinAggregate";
import { StudentLeaveReportSumAggregate } from "../outputs/StudentLeaveReportSumAggregate";

@TypeGraphQL.ObjectType("StudentLeaveReportGroupBy", {
  isAbstract: true
})
export class StudentLeaveReportGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  studentId!: number;

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
