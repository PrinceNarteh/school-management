import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationOrderByWithAggregationInput } from "../../../inputs/StaffNotificationOrderByWithAggregationInput";
import { StaffNotificationScalarWhereWithAggregatesInput } from "../../../inputs/StaffNotificationScalarWhereWithAggregatesInput";
import { StaffNotificationWhereInput } from "../../../inputs/StaffNotificationWhereInput";
import { StaffNotificationScalarFieldEnum } from "../../../../enums/StaffNotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  where?: StaffNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StaffNotificationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "message" | "staffId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StaffNotificationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StaffNotificationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
