import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationUpdateWithoutStaffInput } from "../inputs/StaffNotificationUpdateWithoutStaffInput";
import { StaffNotificationWhereUniqueInput } from "../inputs/StaffNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StaffNotificationUpdateWithWhereUniqueWithoutStaffInput", {
  isAbstract: true
})
export class StaffNotificationUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StaffNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffNotificationUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: StaffNotificationUpdateWithoutStaffInput;
}
