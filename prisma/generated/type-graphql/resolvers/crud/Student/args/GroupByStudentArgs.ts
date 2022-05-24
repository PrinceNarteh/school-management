import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentOrderByWithAggregationInput } from "../../../inputs/StudentOrderByWithAggregationInput";
import { StudentScalarWhereWithAggregatesInput } from "../../../inputs/StudentScalarWhereWithAggregatesInput";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";
import { StudentScalarFieldEnum } from "../../../../enums/StudentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStudentArgs {
  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true
  })
  where?: StudentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StudentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "firstName" | "middleName" | "lastName" | "gender" | "email" | "dateOfBirth" | "profilePic" | "password" | "admissionStatus" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StudentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StudentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
