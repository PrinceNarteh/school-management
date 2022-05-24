import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutAssessmentInput } from "../inputs/StudentCreateWithoutAssessmentInput";
import { StudentUpdateWithoutAssessmentInput } from "../inputs/StudentUpdateWithoutAssessmentInput";

@TypeGraphQL.InputType("StudentUpsertWithoutAssessmentInput", {
  isAbstract: true
})
export class StudentUpsertWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutAssessmentInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutAssessmentInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentInput, {
    nullable: false
  })
  create!: StudentCreateWithoutAssessmentInput;
}
