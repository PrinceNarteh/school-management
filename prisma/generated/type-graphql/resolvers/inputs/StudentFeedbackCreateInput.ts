import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateNestedOneWithoutStudentFeedbackInput } from "../inputs/StudentCreateNestedOneWithoutStudentFeedbackInput";

@TypeGraphQL.InputType("StudentFeedbackCreateInput", {
  isAbstract: true
})
export class StudentFeedbackCreateInput {
  @TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutStudentFeedbackInput, {
    nullable: false
  })
  student!: StudentCreateNestedOneWithoutStudentFeedbackInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reply!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
