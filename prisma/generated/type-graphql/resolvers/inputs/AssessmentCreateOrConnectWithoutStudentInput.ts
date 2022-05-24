import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateWithoutStudentInput } from "../inputs/AssessmentCreateWithoutStudentInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentCreateWithoutStudentInput, {
    nullable: false
  })
  create!: AssessmentCreateWithoutStudentInput;
}
