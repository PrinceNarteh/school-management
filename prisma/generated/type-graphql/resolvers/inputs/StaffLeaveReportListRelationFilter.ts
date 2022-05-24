import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportWhereInput } from "../inputs/StaffLeaveReportWhereInput";

@TypeGraphQL.InputType("StaffLeaveReportListRelationFilter", {
  isAbstract: true
})
export class StaffLeaveReportListRelationFilter {
  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  every?: StaffLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  some?: StaffLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffLeaveReportWhereInput, {
    nullable: true
  })
  none?: StaffLeaveReportWhereInput | undefined;
}
