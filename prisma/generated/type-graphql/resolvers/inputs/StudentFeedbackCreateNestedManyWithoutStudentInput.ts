import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackCreateManyStudentInputEnvelope } from "../inputs/StudentFeedbackCreateManyStudentInputEnvelope";
import { StudentFeedbackCreateOrConnectWithoutStudentInput } from "../inputs/StudentFeedbackCreateOrConnectWithoutStudentInput";
import { StudentFeedbackCreateWithoutStudentInput } from "../inputs/StudentFeedbackCreateWithoutStudentInput";
import { StudentFeedbackWhereUniqueInput } from "../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.InputType("StudentFeedbackCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class StudentFeedbackCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [StudentFeedbackCreateWithoutStudentInput], {
    nullable: true
  })
  create?: StudentFeedbackCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: StudentFeedbackCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: StudentFeedbackCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentFeedbackWhereUniqueInput[] | undefined;
}
