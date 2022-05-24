import * as TypeGraphQL from "type-graphql";

export enum SubjectScalarFieldEnum {
  id = "id",
  name = "name",
  courseId = "courseId",
  staffId = "staffId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SubjectScalarFieldEnum, {
  name: "SubjectScalarFieldEnum",
  description: undefined,
});
