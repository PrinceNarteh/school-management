import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationCreateInput } from "../../../inputs/StaffNotificationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationCreateInput, {
    nullable: false
  })
  data!: StaffNotificationCreateInput;
}
