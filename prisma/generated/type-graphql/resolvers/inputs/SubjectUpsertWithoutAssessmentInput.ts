import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutAssessmentInput } from "../inputs/SubjectCreateWithoutAssessmentInput";
import { SubjectUpdateWithoutAssessmentInput } from "../inputs/SubjectUpdateWithoutAssessmentInput";

@TypeGraphQL.InputType("SubjectUpsertWithoutAssessmentInput", {
  isAbstract: true
})
export class SubjectUpsertWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => SubjectUpdateWithoutAssessmentInput, {
    nullable: false
  })
  update!: SubjectUpdateWithoutAssessmentInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutAssessmentInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutAssessmentInput;
}
