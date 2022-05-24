import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutAssessmentInput } from "../inputs/SubjectCreateWithoutAssessmentInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateOrConnectWithoutAssessmentInput", {
  isAbstract: true
})
export class SubjectCreateOrConnectWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutAssessmentInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutAssessmentInput;
}
