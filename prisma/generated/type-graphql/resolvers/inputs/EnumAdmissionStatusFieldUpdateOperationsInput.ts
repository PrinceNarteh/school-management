import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdmissionStatus } from "../../enums/AdmissionStatus";

@TypeGraphQL.InputType("EnumAdmissionStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumAdmissionStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AdmissionStatus, {
    nullable: true
  })
  set?: "Received" | "InProgress" | "Admitted" | undefined;
}
