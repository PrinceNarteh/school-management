import * as TypeGraphQL from "type-graphql";

export enum StaffFeedbackScalarFieldEnum {
  id = "id",
  staffId = "staffId",
  message = "message",
  reply = "reply",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StaffFeedbackScalarFieldEnum, {
  name: "StaffFeedbackScalarFieldEnum",
  description: undefined,
});
