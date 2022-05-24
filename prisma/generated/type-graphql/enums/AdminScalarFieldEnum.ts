import * as TypeGraphQL from "type-graphql";

export enum AdminScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  middleName = "middleName",
  lastName = "lastName",
  gender = "gender",
  email = "email",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AdminScalarFieldEnum, {
  name: "AdminScalarFieldEnum",
  description: undefined,
});
