import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StaffLeaveReportScalarWhereInput", {
  isAbstract: true
})
export class StaffLeaveReportScalarWhereInput {
  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereInput], {
    nullable: true
  })
  AND?: StaffLeaveReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereInput], {
    nullable: true
  })
  OR?: StaffLeaveReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffLeaveReportScalarWhereInput], {
    nullable: true
  })
  NOT?: StaffLeaveReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staffId?: IntFilter | undefined;

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
