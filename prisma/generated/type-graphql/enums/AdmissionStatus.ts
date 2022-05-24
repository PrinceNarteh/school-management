import * as TypeGraphQL from "type-graphql";

export enum AdmissionStatus {
  Recieved = "Recieved",
  InProgress = "InProgress",
  Admitted = "Admitted"
}
TypeGraphQL.registerEnumType(AdmissionStatus, {
  name: "AdmissionStatus",
  description: undefined,
});
