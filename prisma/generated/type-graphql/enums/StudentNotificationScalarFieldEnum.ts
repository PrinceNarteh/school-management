import * as TypeGraphQL from "type-graphql";

export enum StudentNotificationScalarFieldEnum {
  id = "id",
  message = "message",
  studentId = "studentId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StudentNotificationScalarFieldEnum, {
  name: "StudentNotificationScalarFieldEnum",
  description: undefined,
});
