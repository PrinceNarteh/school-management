import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StaffFeedbackScalarWhereInput", {
  isAbstract: true
})
export class StaffFeedbackScalarWhereInput {
  @TypeGraphQL.Field(_type => [StaffFeedbackScalarWhereInput], {
    nullable: true
  })
  AND?: StaffFeedbackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackScalarWhereInput], {
    nullable: true
  })
  OR?: StaffFeedbackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffFeedbackScalarWhereInput], {
    nullable: true
  })
  NOT?: StaffFeedbackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staffId?: IntFilter | undefined;

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
