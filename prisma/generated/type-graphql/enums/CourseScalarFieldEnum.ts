import * as TypeGraphQL from "type-graphql";

export enum CourseScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CourseScalarFieldEnum, {
  name: "CourseScalarFieldEnum",
  description: undefined,
});
