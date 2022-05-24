import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAdmissionStatusFilter } from "../inputs/NestedEnumAdmissionStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { AdmissionStatus } from "../../enums/AdmissionStatus";

@TypeGraphQL.InputType("NestedEnumAdmissionStatusWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumAdmissionStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumAdmissionStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAdmissionStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAdmissionStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumAdmissionStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAdmissionStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumAdmissionStatusFilter | undefined;
}
