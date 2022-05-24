import * as TypeGraphQL from "type-graphql";

export enum AssessmentReportScalarFieldEnum {
  id = "id",
  status = "status",
  studentId = "studentId",
  assessmentId = "assessmentId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AssessmentReportScalarFieldEnum, {
  name: "AssessmentReportScalarFieldEnum",
  description: undefined,
});
