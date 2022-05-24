import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackScalarWhereInput } from "../inputs/StudentFeedbackScalarWhereInput";
import { StudentFeedbackUpdateManyMutationInput } from "../inputs/StudentFeedbackUpdateManyMutationInput";

@TypeGraphQL.InputType("StudentFeedbackUpdateManyWithWhereWithoutStudentInput", {
  isAbstract: true
})
export class StudentFeedbackUpdateManyWithWhereWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentFeedbackScalarWhereInput, {
    nullable: false
  })
  where!: StudentFeedbackScalarWhereInput;

  @TypeGraphQL.Field(_type => StudentFeedbackUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentFeedbackUpdateManyMutationInput;
}
