import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StaffRelationFilter } from "../inputs/StaffRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StaffLeaveReportWhereInput", {
  isAbstract: true
})
export class StaffLeaveReportWhereInput {
  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereInput], {
    nullable: true
  })
  AND?: StaffLeaveReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereInput], {
    nullable: true
  })
  OR?: StaffLeaveReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportWhereInput], {
    nullable: true
  })
  NOT?: StaffLeaveReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staffId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StaffRelationFilter, {
    nullable: true
  })
  staff?: StaffRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  message?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  status?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
