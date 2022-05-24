import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminAvgAggregate } from "../outputs/AdminAvgAggregate";
import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";
import { AdminSumAggregate } from "../outputs/AdminSumAggregate";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.ObjectType("AdminGroupBy", {
  isAbstract: true
})
export class AdminGroupBy {
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
