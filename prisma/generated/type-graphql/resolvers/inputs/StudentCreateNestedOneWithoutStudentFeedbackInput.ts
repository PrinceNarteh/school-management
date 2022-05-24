import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutStudentFeedbackInput } from "../inputs/StudentCreateOrConnectWithoutStudentFeedbackInput";
import { StudentCreateWithoutStudentFeedbackInput } from "../inputs/StudentCreateWithoutStudentFeedbackInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedOneWithoutStudentFeedbackInput", {
  isAbstract: true
})
export class StudentCreateNestedOneWithoutStudentFeedbackInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentFeedbackInput, {
    nullable: true
  })
  create?: StudentCreateWithoutStudentFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutStudentFeedbackInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutStudentFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;
}
