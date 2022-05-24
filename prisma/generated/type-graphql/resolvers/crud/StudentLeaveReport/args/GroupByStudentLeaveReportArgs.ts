import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportOrderByWithAggregationInput } from "../../../inputs/StudentLeaveReportOrderByWithAggregationInput";
import { StudentLeaveReportScalarWhereWithAggregatesInput } from "../../../inputs/StudentLeaveReportScalarWhereWithAggregatesInput";
import { StudentLeaveReportWhereInput } from "../../../inputs/StudentLeaveReportWhereInput";
import { StudentLeaveReportScalarFieldEnum } from "../../../../enums/StudentLeaveReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  where?: StudentLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StudentLeaveReportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "studentId" | "date" | "message" | "status" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StudentLeaveReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StudentLeaveReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
