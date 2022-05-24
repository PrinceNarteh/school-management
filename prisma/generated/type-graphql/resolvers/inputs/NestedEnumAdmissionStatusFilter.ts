import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdmissionStatus } from "../../enums/AdmissionStatus";

@TypeGraphQL.InputType("NestedEnumAdmissionStatusFilter", {
  isAbstract: true
})
export class NestedEnumAdmissionStatusFilter {
  @TypeGraphQL.Field(_type => AdmissionStatus, {
    nullable: true
  })
  equals?: "Received" | "InProgress" | "Admitted" | undefined;

  @TypeGraphQL.Field(_type => [AdmissionStatus], {
    nullable: true
  })
  in?: Array<"Received" | "InProgress" | "Admitted"> | undefined;

  @TypeGraphQL.Field(_type => [AdmissionStatus], {
    nullable: true
  })
  notIn?: Array<"Received" | "InProgress" | "Admitted"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAdmissionStatusFilter, {
    nullable: true
  })
  not?: NestedEnumAdmissionStatusFilter | undefined;
}
