import * as TypeGraphQL from "type-graphql";

export enum AssessmentScalarFieldEnum {
  id = "id",
  studentId = "studentId",
  subjectId = "subjectId",
  date = "date",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AssessmentScalarFieldEnum, {
  name: "AssessmentScalarFieldEnum",
  description: undefined,
});
