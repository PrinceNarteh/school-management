import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutStudentFeedbackInput } from "../inputs/StudentCreateWithoutStudentFeedbackInput";
import { StudentUpdateWithoutStudentFeedbackInput } from "../inputs/StudentUpdateWithoutStudentFeedbackInput";

@TypeGraphQL.InputType("StudentUpsertWithoutStudentFeedbackInput", {
  isAbstract: true
})
export class StudentUpsertWithoutStudentFeedbackInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutStudentFeedbackInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutStudentFeedbackInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentFeedbackInput, {
    nullable: false
  })
  create!: StudentCreateWithoutStudentFeedbackInput;
}
