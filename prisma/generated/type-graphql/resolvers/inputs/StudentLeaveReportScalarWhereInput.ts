import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StudentLeaveReportScalarWhereInput", {
  isAbstract: true
})
export class StudentLeaveReportScalarWhereInput {
  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereInput], {
    nullable: true
  })
  AND?: StudentLeaveReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereInput], {
    nullable: true
  })
  OR?: StudentLeaveReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentLeaveReportScalarWhereInput], {
    nullable: true
  })
  NOT?: StudentLeaveReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  studentId?: IntFilter | undefined;

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
