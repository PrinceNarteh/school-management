import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentRelationFilter } from "../inputs/AssessmentRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";

@TypeGraphQL.InputType("AssessmentReportWhereInput", {
  isAbstract: true
})
export class AssessmentReportWhereInput {
  @TypeGraphQL.Field(_type => [AssessmentReportWhereInput], {
    nullable: true
  })
  AND?: AssessmentReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereInput], {
    nullable: true
  })
  OR?: AssessmentReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportWhereInput], {
    nullable: true
  })
  NOT?: AssessmentReportWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StudentRelationFilter, {
    nullable: true
  })
  student?: StudentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  assessmentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AssessmentRelationFilter, {
    nullable: true
  })
  assessment?: AssessmentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
