import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutAssessmentInput } from "../inputs/StudentCreateWithoutAssessmentInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateOrConnectWithoutAssessmentInput", {
  isAbstract: true
})
export class StudentCreateOrConnectWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutAssessmentInput, {
    nullable: false
  })
  create!: StudentCreateWithoutAssessmentInput;
}
