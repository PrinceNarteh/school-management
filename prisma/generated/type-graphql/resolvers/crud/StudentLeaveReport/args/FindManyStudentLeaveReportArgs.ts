import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentLeaveReportOrderByWithRelationInput } from "../../../inputs/StudentLeaveReportOrderByWithRelationInput";
import { StudentLeaveReportWhereInput } from "../../../inputs/StudentLeaveReportWhereInput";
import { StudentLeaveReportWhereUniqueInput } from "../../../inputs/StudentLeaveReportWhereUniqueInput";
import { StudentLeaveReportScalarFieldEnum } from "../../../../enums/StudentLeaveReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyStudentLeaveReportArgs {
  @TypeGraphQL.Field(_type => StudentLeaveReportWhereInput, {
    nullable: true
  })
  where?: StudentLeaveReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StudentLeaveReportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentLeaveReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: StudentLeaveReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "studentId" | "date" | "message" | "status" | "createdAt" | "updatedAt"> | undefined;
}
