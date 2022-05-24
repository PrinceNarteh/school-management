import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentUpdateWithoutSubjectInput } from "../inputs/AssessmentUpdateWithoutSubjectInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpdateWithWhereUniqueWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentUpdateWithWhereUniqueWithoutSubjectInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateWithoutSubjectInput, {
    nullable: false
  })
  data!: AssessmentUpdateWithoutSubjectInput;
}
