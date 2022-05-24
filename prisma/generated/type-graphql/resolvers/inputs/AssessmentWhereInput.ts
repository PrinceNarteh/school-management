import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportListRelationFilter } from "../inputs/AssessmentReportListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";
import { SubjectRelationFilter } from "../inputs/SubjectRelationFilter";

@TypeGraphQL.InputType("AssessmentWhereInput", {
  isAbstract: true
})
export class AssessmentWhereInput {
  @TypeGraphQL.Field(_type => [AssessmentWhereInput], {
    nullable: true
  })
  AND?: AssessmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereInput], {
    nullable: true
  })
  OR?: AssessmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereInput], {
    nullable: true
  })
  NOT?: AssessmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
  subjectId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SubjectRelationFilter, {
    nullable: true
  })
  subject?: SubjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportListRelationFilter, {
    nullable: true
  })
  assessmentReport?: AssessmentReportListRelationFilter | undefined;
}
