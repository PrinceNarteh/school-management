import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackAvgAggregate } from "../outputs/StudentFeedbackAvgAggregate";
import { StudentFeedbackCountAggregate } from "../outputs/StudentFeedbackCountAggregate";
import { StudentFeedbackMaxAggregate } from "../outputs/StudentFeedbackMaxAggregate";
import { StudentFeedbackMinAggregate } from "../outputs/StudentFeedbackMinAggregate";
import { StudentFeedbackSumAggregate } from "../outputs/StudentFeedbackSumAggregate";

@TypeGraphQL.ObjectType("AggregateStudentFeedback", {
  isAbstract: true
})
export class AggregateStudentFeedback {
  @TypeGraphQL.Field(_type => StudentFeedbackCountAggregate, {
    nullable: true
  })
  _count!: StudentFeedbackCountAggregate | null;

  @TypeGraphQL.Field(_type => StudentFeedbackAvgAggregate, {
    nullable: true
  })
  _avg!: StudentFeedbackAvgAggregate | null;

  @TypeGraphQL.Field(_type => StudentFeedbackSumAggregate, {
    nullable: true
  })
  _sum!: StudentFeedbackSumAggregate | null;

  @TypeGraphQL.Field(_type => StudentFeedbackMinAggregate, {
    nullable: true
  })
  _min!: StudentFeedbackMinAggregate | null;

  @TypeGraphQL.Field(_type => StudentFeedbackMaxAggregate, {
    nullable: true
  })
  _max!: StudentFeedbackMaxAggregate | null;
}
