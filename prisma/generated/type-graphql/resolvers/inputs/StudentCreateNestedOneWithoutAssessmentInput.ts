import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutAssessmentInput } from "../inputs/StudentCreateOrConnectWithoutAssessmentInput";
import { StudentCreateWithoutAssessmentInput } from "../inputs/StudentCreateWithoutAssessmentInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedOneWithoutAssessmentInput", {
  isAbstract: true
})
export class StudentCreateNestedOneWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentInput, {
    nullable: true
  })
  create?: StudentCreateWithoutAssessmentInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutAssessmentInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutAssessmentInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;
}
