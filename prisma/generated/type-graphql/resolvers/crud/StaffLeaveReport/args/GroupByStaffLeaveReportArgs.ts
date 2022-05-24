import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportOrderByWithAggregationInput } from "../../../inputs/StaffLeaveReportOrderByWithAggregationInput";
import { StaffLeaveReportScalarWhereWithAggregatesInput } from "../../../inputs/StaffLeaveReportScalarWhereWithAggregatesInput";
import { StaffLeaveReportWhereInput } from "../../../inputs/StaffLeaveReportWhereInput";
import { StaffLeaveReportScalarFieldEnum } from "../../../../enums/StaffLeaveReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  where?: StaffLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StaffLeaveReportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "staffId" | "date" | "message" | "status" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StaffLeaveReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StaffLeaveReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
