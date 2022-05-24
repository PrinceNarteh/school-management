import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAdmissionStatusWithAggregatesFilter } from "../inputs/EnumAdmissionStatusWithAggregatesFilter";
import { EnumGenderWithAggregatesFilter } from "../inputs/EnumGenderWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StudentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StudentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StudentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StudentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StudentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StudentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  middleName?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGenderWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumGenderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  dateOfBirth?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  profilePic?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAdmissionStatusWithAggregatesFilter, {
    nullable: true
  })
  admissionStatus?: EnumAdmissionStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
