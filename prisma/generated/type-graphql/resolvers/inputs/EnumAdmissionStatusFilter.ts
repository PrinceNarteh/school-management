import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAdmissionStatusFilter } from "../inputs/NestedEnumAdmissionStatusFilter";
import { AdmissionStatus } from "../../enums/AdmissionStatus";

@TypeGraphQL.InputType("EnumAdmissionStatusFilter", {
  isAbstract: true
})
export class EnumAdmissionStatusFilter {
  @TypeGraphQL.Field(_type => AdmissionStatus, {
    nullable: true
  })
  equals?: "Recieved" | "InProgress" | "Admitted" | undefined;

  @TypeGraphQL.Field(_type => [AdmissionStatus], {
    nullable: true
  })
  in?: Array<"Recieved" | "InProgress" | "Admitted"> | undefined;

  @TypeGraphQL.Field(_type => [AdmissionStatus], {
    nullable: true
  })
  notIn?: Array<"Recieved" | "InProgress" | "Admitted"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAdmissionStatusFilter, {
    nullable: true
  })
  not?: NestedEnumAdmissionStatusFilter | undefined;
}
