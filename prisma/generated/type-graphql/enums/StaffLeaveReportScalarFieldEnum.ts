import * as TypeGraphQL from "type-graphql";

export enum StaffLeaveReportScalarFieldEnum {
  id = "id",
  staffId = "staffId",
  date = "date",
  message = "message",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StaffLeaveReportScalarFieldEnum, {
  name: "StaffLeaveReportScalarFieldEnum",
  description: undefined,
});
