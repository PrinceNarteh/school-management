import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationUpdateManyMutationInput } from "../../../inputs/StaffNotificationUpdateManyMutationInput";
import { StaffNotificationWhereInput } from "../../../inputs/StaffNotificationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStaffNotificationArgs {
  @TypeGraphQL.Field(_type => StaffNotificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffNotificationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StaffNotificationWhereInput, {
    nullable: true
  })
  where?: StaffNotificationWhereInput | undefined;
}
