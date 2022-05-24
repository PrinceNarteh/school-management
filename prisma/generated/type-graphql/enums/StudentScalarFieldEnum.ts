import * as TypeGraphQL from "type-graphql";

export enum StudentScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  middleName = "middleName",
  lastName = "lastName",
  gender = "gender",
  email = "email",
  dateOfBirth = "dateOfBirth",
  profilePic = "profilePic",
  password = "password",
  admissionStatus = "admissionStatus",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(StudentScalarFieldEnum, {
  name: "StudentScalarFieldEnum",
  description: undefined,
});
