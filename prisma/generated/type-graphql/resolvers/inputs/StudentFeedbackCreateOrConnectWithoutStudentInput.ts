import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackCreateWithoutStudentInput } from "../inputs/StudentFeedbackCreateWithoutStudentInput";
import { StudentFeedbackWhereUniqueInput } from "../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StudentFeedbackCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class StudentFeedbackCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StudentFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateWithoutStudentInput, {
    nullable: false
  })
  create!: StudentFeedbackCreateWithoutStudentInput;
}
