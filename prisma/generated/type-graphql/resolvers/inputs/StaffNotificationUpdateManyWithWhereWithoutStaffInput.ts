import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationScalarWhereInput } from "../inputs/StaffNotificationScalarWhereInput";
import { StaffNotificationUpdateManyMutationInput } from "../inputs/StaffNotificationUpdateManyMutationInput";

@TypeGraphQL.InputType("StaffNotificationUpdateManyWithWhereWithoutStaffInput", {
  isAbstract: true
})
export class StaffNotificationUpdateManyWithWhereWithoutStaffInput {
  @TypeGraphQL.Field(_type => StaffNotificationScalarWhereInput, {
    nullable: false
  })
  where!: StaffNotificationScalarWhereInput;

  @TypeGraphQL.Field(_type => StaffNotificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffNotificationUpdateManyMutationInput;
}
