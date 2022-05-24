import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationOrderByWithRelationInput } from "../../../inputs/StaffNotificationOrderByWithRelationInput";
import { StaffNotificationWhereInput } from "../../../inputs/StaffNotificationWhereInput";
import { StaffNotificationWhereUniqueInput } from "../../../inputs/StaffNotificationWhereUniqueInput";
import { StaffNotificationScalarFieldEnum } from "../../../../enums/StaffNotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  where?: StaffNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StaffNotificationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: StaffNotificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StaffNotificationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "message" | "staffId" | "createdAt" | "updatedAt"> | undefined;
}
