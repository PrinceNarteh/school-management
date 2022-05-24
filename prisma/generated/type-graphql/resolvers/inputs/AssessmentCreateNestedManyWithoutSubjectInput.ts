import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateManySubjectInputEnvelope } from "../inputs/AssessmentCreateManySubjectInputEnvelope";
import { AssessmentCreateOrConnectWithoutSubjectInput } from "../inputs/AssessmentCreateOrConnectWithoutSubjectInput";
import { AssessmentCreateWithoutSubjectInput } from "../inputs/AssessmentCreateWithoutSubjectInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentCreateNestedManyWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentCreateNestedManyWithoutSubjectInput {
  @TypeGraphQL.Field(_type => [AssessmentCreateWithoutSubjectInput], {
    nullable: true
  })
  create?: AssessmentCreateWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentCreateOrConnectWithoutSubjectInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentCreateOrConnectWithoutSubjectInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateManySubjectInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentCreateManySubjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AssessmentWhereUniqueInput[] | undefined;
}
