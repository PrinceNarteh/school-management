import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationCreateInput } from "../../../inputs/StaffNotificationCreateInput";
import { StaffNotificationUpdateInput } from "../../../inputs/StaffNotificationUpdateInput";
import { StaffNotificationWhereUniqueInput } from "../../../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StaffNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffNotificationCreateInput, {
    nullable: false
  })
  create!: StaffNotificationCreateInput;

  @TypeGraphQL.Field(_type => StaffNotificationUpdateInput, {
    nullable: false
  })
  update!: StaffNotificationUpdateInput;
}
