import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffAvgAggregate } from "../outputs/StaffAvgAggregate";
import { StaffCountAggregate } from "../outputs/StaffCountAggregate";
import { StaffMaxAggregate } from "../outputs/StaffMaxAggregate";
import { StaffMinAggregate } from "../outputs/StaffMinAggregate";
import { StaffSumAggregate } from "../outputs/StaffSumAggregate";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.ObjectType("StaffGroupBy", {
  isAbstract: true
})
export class StaffGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middleName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => StaffCountAggregate, {
    nullable: true
  })
  _count!: StaffCountAggregate | null;

  @TypeGraphQL.Field(_type => StaffAvgAggregate, {
    nullable: true
  })
  _avg!: StaffAvgAggregate | null;

  @TypeGraphQL.Field(_type => StaffSumAggregate, {
    nullable: true
  })
  _sum!: StaffSumAggregate | null;

  @TypeGraphQL.Field(_type => StaffMinAggregate, {
    nullable: true
  })
  _min!: StaffMinAggregate | null;

  @TypeGraphQL.Field(_type => StaffMaxAggregate, {
    nullable: true
  })
  _max!: StaffMaxAggregate | null;
}
