import * as TypeGraphQL from "type-graphql";

export enum StudentFeedbackScalarFieldEnum {
  id = "id",
  studentId = "studentId",
  message = "message",
  reply = "reply",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StudentFeedbackScalarFieldEnum, {
  name: "StudentFeedbackScalarFieldEnum",
  description: undefined,
});
