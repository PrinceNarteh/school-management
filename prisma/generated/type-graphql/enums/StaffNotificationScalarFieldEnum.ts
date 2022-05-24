import * as TypeGraphQL from "type-graphql";

export enum StaffNotificationScalarFieldEnum {
  id = "id",
  message = "message",
  staffId = "staffId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StaffNotificationScalarFieldEnum, {
  name: "StaffNotificationScalarFieldEnum",
  description: undefined,
});
