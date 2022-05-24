import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateOrConnectWithoutAssessmentInput } from "../inputs/SubjectCreateOrConnectWithoutAssessmentInput";
import { SubjectCreateWithoutAssessmentInput } from "../inputs/SubjectCreateWithoutAssessmentInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateNestedOneWithoutAssessmentInput", {
  isAbstract: true
})
export class SubjectCreateNestedOneWithoutAssessmentInput {
  @TypeGraphQL.Field(_type => SubjectCreateWithoutAssessmentInput, {
    nullable: true
  })
  create?: SubjectCreateWithoutAssessmentInput | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateOrConnectWithoutAssessmentInput, {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutAssessmentInput | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput | undefined;
}
