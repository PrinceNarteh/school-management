import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationWhereUniqueInput } from "../../../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StaffNotificationWhereUniqueInput;
}
