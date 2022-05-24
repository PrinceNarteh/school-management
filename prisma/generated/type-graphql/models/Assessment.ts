import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { AssessmentReport } from "../models/AssessmentReport";
import { Student } from "../models/Student";
import { Subject } from "../models/Subject";
import { AssessmentCount } from "../resolvers/outputs/AssessmentCount";

@TypeGraphQL.ObjectType("Assessment", {
  isAbstract: true
})
export class Assessment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  studentId!: number;

  student?: Student;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  subjectId!: number;

  subject?: Subject;

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

  assessmentReport?: AssessmentReport[];

  @TypeGraphQL.Field(_type => AssessmentCount, {
    nullable: true
  })
  _count?: AssessmentCount | null;
}
