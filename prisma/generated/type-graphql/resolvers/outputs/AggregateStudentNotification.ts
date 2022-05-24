import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationAvgAggregate } from "../outputs/StudentNotificationAvgAggregate";
import { StudentNotificationCountAggregate } from "../outputs/StudentNotificationCountAggregate";
import { StudentNotificationMaxAggregate } from "../outputs/StudentNotificationMaxAggregate";
import { StudentNotificationMinAggregate } from "../outputs/StudentNotificationMinAggregate";
import { StudentNotificationSumAggregate } from "../outputs/StudentNotificationSumAggregate";

@TypeGraphQL.ObjectType("AggregateStudentNotification", {
  isAbstract: true
})
export class AggregateStudentNotification {
  @TypeGraphQL.Field(_type => StudentNotificationCountAggregate, {
    nullable: true
  })
  _count!: StudentNotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => StudentNotificationAvgAggregate, {
    nullable: true
  })
  _avg!: StudentNotificationAvgAggregate | null;

  @TypeGraphQL.Field(_type => StudentNotificationSumAggregate, {
    nullable: true
  })
  _sum!: StudentNotificationSumAggregate | null;

  @TypeGraphQL.Field(_type => StudentNotificationMinAggregate, {
    nullable: true
  })
  _min!: StudentNotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => StudentNotificationMaxAggregate, {
    nullable: true
  })
  _max!: StudentNotificationMaxAggregate | null;
}
