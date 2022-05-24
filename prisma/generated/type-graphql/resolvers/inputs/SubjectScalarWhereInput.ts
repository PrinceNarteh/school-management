import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubjectScalarWhereInput", {
  isAbstract: true
})
export class SubjectScalarWhereInput {
  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  AND?: SubjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  OR?: SubjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  NOT?: SubjectScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staffId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
