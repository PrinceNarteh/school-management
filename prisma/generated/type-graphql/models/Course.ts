import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Subject } from "../models/Subject";
import { CourseCount } from "../resolvers/outputs/CourseCount";

@TypeGraphQL.ObjectType("Course", {
  isAbstract: true
})
export class Course {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  subjects?: Subject[];

  @TypeGraphQL.Field(_type => CourseCount, {
    nullable: true
  })
  _count?: CourseCount | null;
}
