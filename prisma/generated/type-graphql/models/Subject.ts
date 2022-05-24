import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assessment } from "../models/Assessment";
import { Course } from "../models/Course";
import { Staff } from "../models/Staff";
import { SubjectCount } from "../resolvers/outputs/SubjectCount";

@TypeGraphQL.ObjectType("Subject", {
  isAbstract: true
})
export class Subject {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  courseId!: number;

  course?: Course;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staffId!: number;

  staff?: Staff;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  assessment?: Assessment[];

  @TypeGraphQL.Field(_type => SubjectCount, {
    nullable: true
  })
  _count?: SubjectCount | null;
}
