import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutStudentFeedbackInput } from "../inputs/StudentCreateWithoutStudentFeedbackInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateOrConnectWithoutStudentFeedbackInput", {
  isAbstract: true
})
export class StudentCreateOrConnectWithoutStudentFeedbackInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentFeedbackInput, {
    nullable: false
  })
  create!: StudentCreateWithoutStudentFeedbackInput;
}
