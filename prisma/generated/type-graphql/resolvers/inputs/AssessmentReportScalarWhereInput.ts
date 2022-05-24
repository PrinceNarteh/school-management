import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AssessmentReportScalarWhereInput", {
  isAbstract: true
})
export class AssessmentReportScalarWhereInput {
  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereInput], {
    nullable: true
  })
  AND?: AssessmentReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereInput], {
    nullable: true
  })
  OR?: AssessmentReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportScalarWhereInput], {
    nullable: true
  })
  NOT?: AssessmentReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  studentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  assessmentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
