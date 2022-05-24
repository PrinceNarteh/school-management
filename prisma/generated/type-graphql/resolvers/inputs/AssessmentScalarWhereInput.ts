import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("AssessmentScalarWhereInput", {
  isAbstract: true
})
export class AssessmentScalarWhereInput {
  @TypeGraphQL.Field(_type => [AssessmentScalarWhereInput], {
    nullable: true
  })
  AND?: AssessmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarWhereInput], {
    nullable: true
  })
  OR?: AssessmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarWhereInput], {
    nullable: true
  })
  NOT?: AssessmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  studentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  subjectId?: IntFilter | undefined;

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
}
