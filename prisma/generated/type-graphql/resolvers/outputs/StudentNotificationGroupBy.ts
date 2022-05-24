import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationAvgAggregate } from "../outputs/StudentNotificationAvgAggregate";
import { StudentNotificationCountAggregate } from "../outputs/StudentNotificationCountAggregate";
import { StudentNotificationMaxAggregate } from "../outputs/StudentNotificationMaxAggregate";
import { StudentNotificationMinAggregate } from "../outputs/StudentNotificationMinAggregate";
import { StudentNotificationSumAggregate } from "../outputs/StudentNotificationSumAggregate";

@TypeGraphQL.ObjectType("StudentNotificationGroupBy", {
  isAbstract: true
})
export class StudentNotificationGroupBy {
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
  studentId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
