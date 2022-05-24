import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffNotificationAvgAggregate } from "../outputs/StaffNotificationAvgAggregate";
import { StaffNotificationCountAggregate } from "../outputs/StaffNotificationCountAggregate";
import { StaffNotificationMaxAggregate } from "../outputs/StaffNotificationMaxAggregate";
import { StaffNotificationMinAggregate } from "../outputs/StaffNotificationMinAggregate";
import { StaffNotificationSumAggregate } from "../outputs/StaffNotificationSumAggregate";

@TypeGraphQL.ObjectType("StaffNotificationGroupBy", {
  isAbstract: true
})
export class StaffNotificationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staffId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
