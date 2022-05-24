import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentLeaveReportWhereInput } from "../inputs/StudentLeaveReportWhereInput";

@TypeGraphQL.InputType("StudentLeaveReportListRelationFilter", {
  isAbstract: true
})
export class StudentLeaveReportListRelationFilter {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  every?: StudentLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  some?: StudentLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  none?: StudentLeaveReportWhereInput | undefined;
}
