import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffLeaveReportOrderByWithRelationInput } from "../../../inputs/StaffLeaveReportOrderByWithRelationInput";
import { StaffLeaveReportWhereInput } from "../../../inputs/StaffLeaveReportWhereInput";
import { StaffLeaveReportWhereUniqueInput } from "../../../inputs/StaffLeaveReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStaffLeaveReportArgs {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  where?: StaffLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StaffLeaveReportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: StaffLeaveReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
