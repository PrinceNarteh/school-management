import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackAvgAggregate } from "../outputs/StaffFeedbackAvgAggregate";
import { StaffFeedbackCountAggregate } from "../outputs/StaffFeedbackCountAggregate";
import { StaffFeedbackMaxAggregate } from "../outputs/StaffFeedbackMaxAggregate";
import { StaffFeedbackMinAggregate } from "../outputs/StaffFeedbackMinAggregate";
import { StaffFeedbackSumAggregate } from "../outputs/StaffFeedbackSumAggregate";

@TypeGraphQL.ObjectType("StaffFeedbackGroupBy", {
  isAbstract: true
})
export class StaffFeedbackGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staffId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reply!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => StaffFeedbackCountAggregate, {
    nullable: true
  })
  _count!: StaffFeedbackCountAggregate | null;

  @TypeGraphQL.Field(_type => StaffFeedbackAvgAggregate, {
    nullable: true
  })
  _avg!: StaffFeedbackAvgAggregate | null;

  @TypeGraphQL.Field(_type => StaffFeedbackSumAggregate, {
    nullable: true
  })
  _sum!: StaffFeedbackSumAggregate | null;

  @TypeGraphQL.Field(_type => StaffFeedbackMinAggregate, {
    nullable: true
  })
  _min!: StaffFeedbackMinAggregate | null;

  @TypeGraphQL.Field(_type => StaffFeedbackMaxAggregate, {
    nullable: true
  })
  _max!: StaffFeedbackMaxAggregate | null;
}
