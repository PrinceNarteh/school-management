import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateWithoutSubjectInput } from "../inputs/AssessmentCreateWithoutSubjectInput";
import { AssessmentUpdateWithoutSubjectInput } from "../inputs/AssessmentUpdateWithoutSubjectInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentUpsertWithWhereUniqueWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentUpsertWithWhereUniqueWithoutSubjectInput {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateWithoutSubjectInput, {
    nullable: false
  })
  update!: AssessmentUpdateWithoutSubjectInput;

  @TypeGraphQL.Field(_type => AssessmentCreateWithoutSubjectInput, {
    nullable: false
  })
  create!: AssessmentCreateWithoutSubjectInput;
}
