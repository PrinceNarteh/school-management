import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationWhereInput } from "../../../inputs/StaffNotificationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  where?: StaffNotificationWhereInput | undefined;
}
