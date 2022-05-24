import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffNotificationCreateManyInput } from "../../../inputs/StaffNotificationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStaffNotificationArgs {
  @TypeGraphQL.Field(_type => [StaffNotificationCreateManyInput], {
    nullable: false
  })
  data!: StaffNotificationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
