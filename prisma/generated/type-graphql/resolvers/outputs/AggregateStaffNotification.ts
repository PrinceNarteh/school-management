import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationAvgAggregate } from "../outputs/StaffNotificationAvgAggregate";
import { StaffNotificationCountAggregate } from "../outputs/StaffNotificationCountAggregate";
import { StaffNotificationMaxAggregate } from "../outputs/StaffNotificationMaxAggregate";
import { StaffNotificationMinAggregate } from "../outputs/StaffNotificationMinAggregate";
import { StaffNotificationSumAggregate } from "../outputs/StaffNotificationSumAggregate";

@TypeGraphQL.ObjectType("AggregateStaffNotification", {
  isAbstract: true
})
export class AggregateStaffNotification {
  @TypeGraphQL.Field(_type => StaffNotificationCountAggregate, {
    nullable: true
  })
  _count!: StaffNotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => StaffNotificationAvgAggregate, {
    nullable: true
  })
  _avg!: StaffNotificationAvgAggregate | null;

  @TypeGraphQL.Field(_type => StaffNotificationSumAggregate, {
    nullable: true
  })
  _sum!: StaffNotificationSumAggregate | null;

  @TypeGraphQL.Field(_type => StaffNotificationMinAggregate, {
    nullable: true
  })
  _min!: StaffNotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => StaffNotificationMaxAggregate, {
    nullable: true
  })
  _max!: StaffNotificationMaxAggregate | null;
}
