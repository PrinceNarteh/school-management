import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StudentFeedbackScalarWhereInput", {
  isAbstract: true
})
export class StudentFeedbackScalarWhereInput {
  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereInput], {
    nullable: true
  })
  AND?: StudentFeedbackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereInput], {
    nullable: true
  })
  OR?: StudentFeedbackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarWhereInput], {
    nullable: true
  })
  NOT?: StudentFeedbackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  studentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  message?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reply?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
