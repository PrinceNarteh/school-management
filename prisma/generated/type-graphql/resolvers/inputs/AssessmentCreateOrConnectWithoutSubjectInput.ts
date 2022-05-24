import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateWithoutSubjectInput } from "../inputs/AssessmentCreateWithoutSubjectInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentCreateOrConnectWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentCreateOrConnectWithoutSubjectInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentCreateWithoutSubjectInput, {
    nullable: false
  })
  create!: AssessmentCreateWithoutSubjectInput;
}
