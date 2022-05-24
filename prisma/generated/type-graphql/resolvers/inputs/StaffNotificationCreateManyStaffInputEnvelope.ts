import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationCreateManyStaffInput } from "../inputs/StaffNotificationCreateManyStaffInput";

@TypeGraphQL.InputType("StaffNotificationCreateManyStaffInputEnvelope", {
  isAbstract: true
})
export class StaffNotificationCreateManyStaffInputEnvelope {
  @TypeGraphQL.Field(_type => [StaffNotificationCreateManyStaffInput], {
    nullable: false
  })
  data!: StaffNotificationCreateManyStaffInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
