import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackCreateWithoutStudentInput } from "../inputs/StudentFeedbackCreateWithoutStudentInput";
import { StudentFeedbackUpdateWithoutStudentInput } from "../inputs/StudentFeedbackUpdateWithoutStudentInput";
import { StudentFeedbackWhereUniqueInput } from "../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StudentFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentFeedbackUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: StudentFeedbackUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateWithoutStudentInput, {
    nullable: false
  })
  create!: StudentFeedbackCreateWithoutStudentInput;
}
