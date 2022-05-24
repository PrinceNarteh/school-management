import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackUpdateWithoutStudentInput } from "../inputs/StudentFeedbackUpdateWithoutStudentInput";
import { StudentFeedbackWhereUniqueInput } from "../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StudentFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentFeedbackUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: StudentFeedbackUpdateWithoutStudentInput;
}
