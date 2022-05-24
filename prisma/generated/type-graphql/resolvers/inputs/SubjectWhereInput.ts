import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentListRelationFilter } from "../inputs/AssessmentListRelationFilter";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StaffRelationFilter } from "../inputs/StaffRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubjectWhereInput", {
  isAbstract: true
})
export class SubjectWhereInput {
  @TypeGraphQL.Field(_type => [SubjectWhereInput], {
    nullable: true
  })
  AND?: SubjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereInput], {
    nullable: true
  })
  OR?: SubjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereInput], {
    nullable: true
  })
  NOT?: SubjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  courseId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  course?: CourseRelationFilter | undefined;

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
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AssessmentListRelationFilter, {
    nullable: true
  })
  assessment?: AssessmentListRelationFilter | undefined;
}
