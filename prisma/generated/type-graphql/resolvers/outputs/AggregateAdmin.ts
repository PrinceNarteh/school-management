import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminAvgAggregate } from "../outputs/AdminAvgAggregate";
import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";
import { AdminSumAggregate } from "../outputs/AdminSumAggregate";

@TypeGraphQL.ObjectType("AggregateAdmin", {
  isAbstract: true
})
export class AggregateAdmin {
  @TypeGraphQL.Field(_type => AdminCountAggregate, {
    nullable: true
  })
  _count!: AdminCountAggregate | null;

  @TypeGraphQL.Field(_type => AdminAvgAggregate, {
    nullable: true
  })
  _avg!: AdminAvgAggregate | null;

  @TypeGraphQL.Field(_type => AdminSumAggregate, {
    nullable: true
  })
  _sum!: AdminSumAggregate | null;

  @TypeGraphQL.Field(_type => AdminMinAggregate, {
    nullable: true
  })
  _min!: AdminMinAggregate | null;

  @TypeGraphQL.Field(_type => AdminMaxAggregate, {
    nullable: true
  })
  _max!: AdminMaxAggregate | null;
}
