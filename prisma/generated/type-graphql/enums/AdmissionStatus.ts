import * as TypeGraphQL from "type-graphql";

export enum AdmissionStatus {
  Received = "Received",
  InProgress = "InProgress",
  Admitted = "Admitted"
}
TypeGraphQL.registerEnumType(AdmissionStatus, {
  name: "AdmissionStatus",
  description: undefined,
});
