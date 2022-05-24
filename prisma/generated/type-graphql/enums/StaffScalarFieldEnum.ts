import * as TypeGraphQL from "type-graphql";

export enum StaffScalarFieldEnum {
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
TypeGraphQL.registerEnumType(StaffScalarFieldEnum, {
  name: "StaffScalarFieldEnum",
  description: undefined,
});
