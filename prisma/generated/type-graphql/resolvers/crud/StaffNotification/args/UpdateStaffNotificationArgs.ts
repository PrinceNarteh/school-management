import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationUpdateInput } from "../../../inputs/StaffNotificationUpdateInput";
import { StaffNotificationWhereUniqueInput } from "../../../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationUpdateInput, {
    nullable: false
  })
  data!: StaffNotificationUpdateInput;

  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StaffNotificationWhereUniqueInput;
}
