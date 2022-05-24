import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationOrderByWithAggregationInput } from "../../../inputs/StudentNotificationOrderByWithAggregationInput";
import { StudentNotificationScalarWhereWithAggregatesInput } from "../../../inputs/StudentNotificationScalarWhereWithAggregatesInput";
import { StudentNotificationWhereInput } from "../../../inputs/StudentNotificationWhereInput";
import { StudentNotificationScalarFieldEnum } from "../../../../enums/StudentNotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  where?: StudentNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StudentNotificationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "message" | "studentId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StudentNotificationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StudentNotificationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
