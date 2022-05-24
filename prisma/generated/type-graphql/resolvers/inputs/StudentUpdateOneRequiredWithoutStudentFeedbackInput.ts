import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutStudentFeedbackInput } from "../inputs/StudentCreateOrConnectWithoutStudentFeedbackInput";
import { StudentCreateWithoutStudentFeedbackInput } from "../inputs/StudentCreateWithoutStudentFeedbackInput";
import { StudentUpdateWithoutStudentFeedbackInput } from "../inputs/StudentUpdateWithoutStudentFeedbackInput";
import { StudentUpsertWithoutStudentFeedbackInput } from "../inputs/StudentUpsertWithoutStudentFeedbackInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateOneRequiredWithoutStudentFeedbackInput", {
  isAbstract: true
})
export class StudentUpdateOneRequiredWithoutStudentFeedbackInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutStudentFeedbackInput, {
    nullable: true
  })
  create?: StudentCreateWithoutStudentFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutStudentFeedbackInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutStudentFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutStudentFeedbackInput, {
    nullable: true
  })
  upsert?: StudentUpsertWithoutStudentFeedbackInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutStudentFeedbackInput, {
    nullable: true
  })
  update?: StudentUpdateWithoutStudentFeedbackInput | undefined;
}
