import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateManyStudentInputEnvelope } from "../inputs/AssessmentCreateManyStudentInputEnvelope";
import { AssessmentCreateOrConnectWithoutStudentInput } from "../inputs/AssessmentCreateOrConnectWithoutStudentInput";
import { AssessmentCreateWithoutStudentInput } from "../inputs/AssessmentCreateWithoutStudentInput";
import { AssessmentWhereUniqueInput } from "../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.InputType("AssessmentCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [AssessmentCreateWithoutStudentInput], {
    nullable: true
  })
  create?: AssessmentCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssessmentCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: AssessmentCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: AssessmentCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssessmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AssessmentWhereUniqueInput[] | undefined;
}
