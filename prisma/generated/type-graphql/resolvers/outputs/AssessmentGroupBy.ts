import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentAvgAggregate } from "../outputs/AssessmentAvgAggregate";
import { AssessmentCountAggregate } from "../outputs/AssessmentCountAggregate";
import { AssessmentMaxAggregate } from "../outputs/AssessmentMaxAggregate";
import { AssessmentMinAggregate } from "../outputs/AssessmentMinAggregate";
import { AssessmentSumAggregate } from "../outputs/AssessmentSumAggregate";

@TypeGraphQL.ObjectType("AssessmentGroupBy", {
  isAbstract: true
})
export class AssessmentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  studentId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  subjectId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => AssessmentCountAggregate, {
    nullable: true
  })
  _count!: AssessmentCountAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentAvgAggregate, {
    nullable: true
  })
  _avg!: AssessmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentSumAggregate, {
    nullable: true
  })
  _sum!: AssessmentSumAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentMinAggregate, {
    nullable: true
  })
  _min!: AssessmentMinAggregate | null;

  @TypeGraphQL.Field(_type => AssessmentMaxAggregate, {
    nullable: true
  })
  _max!: AssessmentMaxAggregate | null;
}
