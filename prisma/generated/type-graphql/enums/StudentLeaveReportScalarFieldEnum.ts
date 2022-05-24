import * as TypeGraphQL from "type-graphql";

export enum StudentLeaveReportScalarFieldEnum {
  id = "id",
  studentId = "studentId",
  date = "date",
  message = "message",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StudentLeaveReportScalarFieldEnum, {
  name: "StudentLeaveReportScalarFieldEnum",
  description: undefined,
});
